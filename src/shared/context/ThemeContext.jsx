import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";


const ThemeContext = createContext(null);


export function ThemeProvider({ children }) {


    const [theme, setTheme] = useState(() => {

        return localStorage.getItem("theme") || "light";

    });



    useEffect(() => {
        console.log("Theme effect: ", theme)

        const html = document.documentElement;

        if(theme === "dark") {

            html.classList.add("dark");

        } else {

            html.classList.remove("dark");

        }


        localStorage.setItem(
            "theme",
            theme
        );


    }, [theme]);





    const toggleTheme = () => {
        console.log("Button clicked.")

        setTheme(currentTheme => {

            const newTheme = currentTheme === "dark" ? "light" : "dark"
            console.log("Current: ", currentTheme)
            console.log("New: ", newTheme)

            return newTheme;
        });

    };




    return (

        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >

            {children}

        </ThemeContext.Provider>

    );

}




// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(){

    return useContext(ThemeContext);

}