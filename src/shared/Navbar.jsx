import { useState } from "react";

import {
    FaBell,
    FaUserCircle,
    FaBars,
} from "react-icons/fa";

import {
    Moon,
    Sun
} from "lucide-react";

import { useTheme } from "./context/ThemeContext";
import { useNavigate } from "react-router-dom";
import useAuthStore from "./store/useAuthStore";
import { logoutUser } from "../features/auth/authService";
import api from "./api/axios";


const Navbar = ({ setOpen }) => {


    const { theme, toggleTheme } = useTheme();


    const [openProfile, setOpenProfile] = useState(false);

    const navigate = useNavigate()

    const logout = useAuthStore(state=>state.logout)

    const handleLogout = async() => {

        const refreshToken = localStorage.getItem("refreshToken")

        try {
            await logoutUser(refreshToken)
        } finally {

            delete api.defaults.headers.common["Authorization"]

            logout()

            navigate("/login")
        }
    } 



    return (

<header
className="
sticky
top-0
z-30

h-16

flex
items-center
justify-between

px-4
sm:px-6


bg-white/80
dark:bg-gray-900/80

backdrop-blur-md

border-b
border-slate-200
dark:border-slate-700
"
>


{/* LEFT */}

<div
className="
flex
items-center
gap-4
"
>


<button

onClick={()=>setOpen(true)}

className="
md:hidden

p-2

rounded-lg

text-slate-700
dark:text-slate-300

hover:bg-slate-100
dark:hover:bg-gray-800

transition
"

aria-label="Open sidebar"

>

<FaBars size={20}/>

</button>



<h1
className="
truncate
text-lg
sm:text-xl

font-bold

text-slate-900
dark:text-white

transition-colors
"
>
StockFlow
</h1>


</div>





{/* RIGHT */}

<div
className="
flex
items-center

gap-3
sm:gap-5
"
>



{/* Notifications */}

<button

className="
relative

p-2

rounded-lg

text-slate-600
dark:text-slate-300

hover:bg-slate-100
dark:hover:bg-gray-800

transition
"

aria-label="Notifications"

>

<FaBell size={20}/>


<span

className="
absolute

top-1
right-1

w-4
h-4

rounded-full

bg-red-500

text-white

text-[10px]

flex
items-center
justify-center
"

>

3

</span>


</button>





{/* Theme Toggle */}


<button

onClick={toggleTheme}

className="
p-2

rounded-lg

text-slate-700
dark:text-yellow-300

hover:bg-slate-100
dark:hover:bg-gray-800

transition
"

title="Toggle theme"

aria-label="Toggle theme"

>

{
theme === "light"
?
<Moon size={20}/>
:
<Sun size={20}/>
}

</button>







{/* PROFILE */}


<div
className="
relative
"
>


<button

onClick={()=>setOpenProfile(!openProfile)}

className="
flex
items-center

gap-2

p-1

rounded-lg


hover:bg-slate-100
dark:hover:bg-gray-800

transition
"

>


<FaUserCircle

size={34}

className="
text-slate-600
dark:text-slate-300
"

/>



<div
className="
hidden
sm:block

text-left
"
>

<p

className="
text-sm

font-semibold

text-slate-800
dark:text-white
"
>
Fazil
</p>


<p

className="
text-xs

text-slate-500
dark:text-slate-400
"

>
Admin
</p>


</div>


</button>





{
openProfile && (

<div

className="
absolute

right-0

mt-3

w-48

rounded-xl

overflow-hidden

py-2


bg-white
dark:bg-slate-800


border

border-slate-200
dark:border-slate-700


shadow-lg

transition-colors
"

>


<button

className="
w-full

px-4
py-2

text-left

text-sm

text-slate-700
dark:text-slate-200


hover:bg-slate-100
dark:hover:bg-gray-700

"

>
Profile
</button>



<button

className="
w-full

px-4
py-2

text-left

text-sm

text-slate-700
dark:text-slate-200


hover:bg-slate-100
dark:hover:bg-gray-700

"

>
Settings
</button>



<hr
className="
border-slate-200
dark:border-gray-700
"
/>



<button
onClick={handleLogout}

className="
w-full

px-4
py-2

text-left

text-sm

text-red-600

hover:bg-red-50

dark:hover:bg-red-950/30

"

>

Logout

</button>



</div>

)

}



</div>


</div>


</header>

    );
};


export default Navbar;