import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FaBox,
    FaShoppingCart,
    FaChartLine,
    FaCreditCard,
    FaWarehouse,
    FaUsers,
    FaArrowRight,
    FaCheckCircle,
    // FaExclamationTriangle
} from "react-icons/fa";

import api from "./api/axios";
import toast from "react-hot-toast";



const modules = [

    {
        icon:<FaBox />,
        title:"Product Management",
        text:"Create, update and manage your inventory products."
    },

    {
        icon:<FaWarehouse />,
        title:"Inventory Tracking",
        text:"Monitor stock movements, adjustments and availability."
    },

    {
        icon:<FaShoppingCart />,
        title:"Order Management",
        text:"Process customer orders and track order history."
    },

    {
        icon:<FaCreditCard />,
        title:"Secure Payments",
        text:"Accept online payments using Stripe Checkout."
    },

    {
        icon:<FaChartLine />,
        title:"Sales Analytics",
        text:"Monitor revenue, trends and business performance."
    },

    {
        icon:<FaUsers />,
        title:"Customer Management",
        text:"Store and manage customer information."
    }

];



const benefits=[

    "Real-time inventory monitoring",

    "Stock movement tracking",

    "Secure payment processing",

    "Sales dashboard analytics",

    "Order lifecycle management",

    "Low stock visibility"

];



export default function HomePage(){


const navigate = useNavigate();


const [products,setProducts]=useState([]);

const handleDemo = async()=>{

    const token = localStorage.getItem("accessToken");
    
    if (token) {
        navigate("/dashboard")
    } 
    else {
      try{

const response = await api.post(
"/demo/login"
);


localStorage.setItem(
"accessToken",
response.data.accessToken
);


localStorage.setItem(
"refreshToken",
response.data.refreshToken
);


navigate("/dashboard");


}catch(error){

toast.error(
"Demo login failed"
);

console.log(error)

}
    }

}


useEffect(()=>{


const loadProducts=async()=>{


try{

const response =
await api.get("/products");


setProducts(response.data.content)


}catch(error){

console.log(error);

}


};


loadProducts();


},[]);





return (

<div className="
min-h-screen
bg-gray-50
">



{/* HERO */}

<section
className="
max-w-7xl
mx-auto
px-6
py-20
grid
md:grid-cols-2
gap-12
items-center
"
>


<div>


<span
className="
bg-blue-100
text-blue-700
px-4
py-2
rounded-full
font-semibold
text-sm
"
>
Inventory & Sales Platform
</span>



<h1
className="
text-5xl
font-bold
text-gray-900
mt-6
leading-tight
"
>

Manage Your Business

<br/>

<span className="text-blue-600">

From One Dashboard

</span>

</h1>



<p
className="
text-gray-600
text-lg
mt-6
leading-relaxed
"
>

StockFlow helps businesses manage products,
track inventory, process customer orders,
accept payments and monitor sales performance
from one powerful platform.

</p>




<div
className="
flex
gap-4
mt-8
flex-wrap
"
>


<button

onClick={handleDemo}

className="
bg-blue-600
text-white
px-8
py-3
rounded-xl
font-semibold
hover:bg-blue-700
transition
"

>

Open Dashboard

</button>




<button

onClick={()=>navigate("/products")}

className="
border
px-8
py-3
rounded-xl
font-semibold
hover:bg-gray-100
transition
"

>

Browse Products

</button>


</div>


</div>





{/* Dashboard Preview */}


<div
className="
relative
"
>


<div
className="
bg-white
rounded-3xl
shadow-xl
p-6
border
"
>


<div
className="
flex
justify-between
items-center
mb-6
"
>

<h3 className="font-bold text-xl">

Dashboard Overview

</h3>


<span
className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
text-sm
"
>

Live

</span>


</div>




<div
className="
grid
grid-cols-2
gap-4
"
>


<StatCard
title="Revenue"
value="TZS 2.4M"
/>


<StatCard
title="Orders"
value="128"
/>


<StatCard
title="Products"
value="450"
/>


<StatCard
title="Low Stock"
value="12"
/>



</div>




<div
className="
mt-6
h-32
bg-blue-50
rounded-xl
flex
items-center
justify-center
text-blue-600
font-semibold
"
>

Sales Chart Preview

</div>



</div>


</div>


</section>





{/* MODULES */}



<section
className="
max-w-7xl
mx-auto
px-6
py-16
"
>


<h2
className="
text-3xl
font-bold
text-center
"
>

Everything You Need To Run Your Business

</h2>



<p
className="
text-gray-500
text-center
mt-3
"
>

Powerful tools for inventory,
sales and customer management.

</p>





<div
className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-10
"
>


{
modules.map(module=>(


<div

key={module.title}

className="
bg-white
border
rounded-2xl
p-6
hover:shadow-lg
transition
"

>


<div
className="
text-blue-600
text-3xl
mb-4
"
>

{module.icon}

</div>


<h3 className="
font-bold
text-lg
">

{module.title}

</h3>


<p
className="
text-gray-500
mt-2
"
>

{module.text}

</p>


</div>


))

}


</div>


</section>







{/* PRODUCT PREVIEW */}


<section
className="
bg-white
py-16
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<div
className="
flex
justify-between
items-center
mb-8
"
>


<h2
className="
text-3xl
font-bold
"
>

Inventory Preview

</h2>


<button

onClick={()=>navigate("/products")}

className="
text-blue-600
flex
items-center
gap-2
"

>

View All

<FaArrowRight/>

</button>


</div>





<div
className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>


{
products.map(product=>(


<div
key={product.id}
className="
border
rounded-2xl
overflow-hidden
bg-gray-50
"
>


<img

src={
product.imageUrl ||
"https://via.placeholder.com/400"
}

className="
h-48
w-full
object-cover
"

/>


<div className="p-5">


<h3 className="font-semibold">

{product.name}

</h3>


<p
className="
text-blue-600
font-bold
mt-2
"
>

TZS {product.price.toLocaleString()}

</p>


</div>


</div>


))

}


</div>


</div>


</section>







{/* BENEFITS */}


<section
className="
max-w-7xl
mx-auto
px-6
py-16
"
>


<h2
className="
text-3xl
font-bold
text-center
"
>

Why Choose StockFlow?

</h2>



<div
className="
grid
md:grid-cols-3
gap-5
mt-10
"
>


{
benefits.map(item=>(


<div

key={item}

className="
flex
items-center
gap-3
bg-white
p-5
rounded-xl
border
"

>


<FaCheckCircle
className="
text-green-600
"
/>


<span>

{item}

</span>


</div>


))

}


</div>


</section>







{/* CTA */}


<section
className="
bg-blue-600
text-white
py-16
"
>


<div
className="
max-w-4xl
mx-auto
text-center
px-6
"
>


<h2
className="
text-4xl
font-bold
"
>

Ready To Manage Your Business?

</h2>



<p
className="
mt-4
text-blue-100
"
>

Track inventory, process orders,
and understand your business performance.

</p>



<button

onClick={()=>navigate("/dashboard")}

className="
mt-8
bg-white
text-blue-600
px-8
py-3
rounded-xl
font-semibold
"

>

Start Using StockFlow

</button>


</div>


</section>



</div>

);

}





function StatCard({title,value}){

return (

<div
className="
bg-gray-50
rounded-xl
p-4
"
>

<p
className="
text-gray-500
text-sm
"
>

{title}

</p>


<h3
className="
text-xl
font-bold
mt-2
"
>

{value}

</h3>


</div>

)

}