import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { register } from "./authService";



const Register = () => {


const navigate = useNavigate();



const [form,setForm] = useState({

username:"",
password:"",
email:"",
phoneNumber:"",
address:""

});



const [loading,setLoading] = useState(false);




const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





const handleRegister=async(e)=>{


e.preventDefault();


try{


setLoading(true);


await register(form);



toast.success(
"Account created successfully"
);



navigate("/login");



}catch(error){


toast.error(
"Registration failed"
);


console.log(error);


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

Create Account

</h1>




<form

onSubmit={handleRegister}

className="
space-y-4
"

>



{
[
["username","Username"],
["email","Email"],
["phoneNumber","Phone Number"],
["address","Address"]
].map(([name,label])=>(


<div key={name}>


<label
className="
text-sm
text-gray-600
"
>

{label}

</label>


<input

name={name}

value={form[name]}

onChange={handleChange}


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


/>


</div>


))
}




<div>


<label
className="
text-sm
text-gray-600
"
>
Password
</label>


<input

name="password"

type="password"

value={form.password}

onChange={handleChange}


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

/>


</div>





<button

disabled={loading}

className="
w-full
bg-blue-600
hover:bg-blue-700
text-white
py-3
rounded-lg
transition
"

>

{
loading
?
"Creating..."
:
"Register"
}


</button>




</form>




<p
className="
text-center
mt-6
text-sm
text-gray-600
"
>

Already have an account?


<Link
to="/login"
className="
ml-2
text-blue-600
font-semibold
"
>

Login

</Link>


</p>



</div>

)


}


export default Register;