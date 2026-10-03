import {useEffect,useState} from "react";

import {
getDashboardSummary,
getSalesChart,
getRecentOrders
}
from "./dashboardService";


import StatCard from "./components/StatCard";

import SalesChart from "./components/SalesChart";

import RecentOrders from "./components/RecentOrders";


import {
FaBox,
FaShoppingCart,
FaMoneyBill,
FaExclamationTriangle
}
from "react-icons/fa";



export default function DashboardPage(){


const [summary,setSummary]=useState(null);

const [sales,setSales]=useState([]);

const [orders,setOrders]=useState([]);

const [error, setError] = useState(null);


const [loading,setLoading]=useState(true);



useEffect(()=>{


const loadDashboard=async()=>{


try{


const [
summaryData,
salesData,
ordersData

]=await Promise.all([


getDashboardSummary(),

getSalesChart(),

getRecentOrders()

]);



setSummary(summaryData);

setSales(salesData);

setOrders(ordersData);


}
catch(error){

console.log(error);

setError("Failed to load dashboard page")

}
finally{

setLoading(false);

}


};



loadDashboard();


},[]);



if(loading){

return (

<div className="p-10">

Loading dashboard...

</div>

)

}

if(error){

        return (

            <div className="
                p-6
                text-red-600
                bg-red-50
                rounded-xl
            ">
                {error}
            </div>

        );

    }




return (

<div className="
p-6
bg-gray-50
dark:bg-slate-900
min-h-screen
">


<h1 className="
text-3xl
font-bold
mb-8
">

Dashboard

</h1>




{/* Statistics */}


<div className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
">


<StatCard

title="Products"

value={summary.totalProducts}

icon={<FaBox/>}

/>



<StatCard

title="Orders"

value={summary.totalOrders}

icon={<FaShoppingCart/>}

/>




<StatCard

title="Revenue"

value={`TZS ${summary.totalRevenue.toLocaleString()}`}

icon={<FaMoneyBill/>}

/>




<StatCard

title="Low Stock"

value={summary.lowStockProducts}

icon={<FaExclamationTriangle/>}

/>



</div>





{/* Charts */}


<div className="
grid
lg:grid-cols-3
gap-4
mt-8
">


<div className="
lg:col-span-2
bg-white
rounded-2xl
p-5
shadow
">


<h2 className="
font-bold
text-xl
text-black
mb-4
">

Sales Overview

</h2>


<SalesChart data={sales}/>


</div>





<div className="
bg-white
dark:bg-slate-900
rounded-2xl
p-6
shadow-sm
border
border-slate-200
dark:border-slate-700
">


<h2 className="
font-bold
text-xl
dark:text-white
mb-4
">

Recent Orders

</h2>


<RecentOrders orders={orders}/>


</div>



</div>




</div>

)


}