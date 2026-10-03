import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import toast from "react-hot-toast";

import { login } from "./authService";


const Login = () => {


    const navigate = useNavigate();


    const [username,setUsername] = useState("");

    const [password,setPassword] = useState("");

    const [loading,setLoading] = useState(false);





    const handleLogin = async(e)=>{

        localStorage.clear()


        e.preventDefault();


        try{


            setLoading(true);



            const response = await login({
                username,
                password
            });


            localStorage.setItem(
                "accessToken",
                response.accessToken
            );


            localStorage.setItem(
                "refreshToken",
                response.refreshToken
            );



            toast.success(
                "Login successful"
            );



            navigate("/products");



        }catch(error){


            toast.error(
                error?.response?.data?.message
                ||
                "Invalid username or password"
            );


            console.error(error);


        }finally{

            setLoading(false);

        }


    };




    return (

        <div
        className="
        bg-white
        rounded-2xl
        shadow-lg
        p-8
        "
        >


            <h1
            className="
            text-3xl
            font-bold
            text-center
            text-slate-800
            mb-6
            "
            >

                Welcome Back

            </h1>



            <form
            onSubmit={handleLogin}
            className="
            space-y-5
            "
            >



                <div>

                    <label className="
                    text-sm
                    text-gray-600
                    ">
                        Username
                    </label>


                    <input

                    type="text"

                    value={username}

                    onChange={
                        e=>setUsername(e.target.value)
                    }

                    className="
                    mt-1
                    w-full
                    border
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    "

                    placeholder="Enter username"

                    />

                </div>





                <div>


                    <label className="
                    text-sm
                    text-gray-600
                    ">
                        Password
                    </label>


                    <input

                    type="password"

                    value={password}

                    onChange={
                        e=>setPassword(e.target.value)
                    }


                    className="
                    mt-1
                    w-full
                    border
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    "

                    placeholder="Enter password"

                    />


                </div>





                <button

                disabled={loading}

                className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                disabled:bg-blue-300
                text-white
                py-3
                rounded-lg
                transition
                "

                >

                    {
                    loading
                    ? "Logging in..."
                    : "Login"
                    }


                </button>



            </form>





            <p
            className="
            text-center
            text-sm
            mt-6
            text-gray-600
            "
            >

                Don't have an account?


                <Link
                to="/register"
                className="
                ml-2
                text-blue-600
                font-semibold
                "
                >

                    Register

                </Link>


            </p>



        </div>

    )

}


export default Login;