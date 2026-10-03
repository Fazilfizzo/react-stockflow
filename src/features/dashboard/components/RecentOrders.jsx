export default function RecentOrders({
orders
}){


return (

<div className="space-y-4">


{
orders.map(order=>(

<div

key={order.orderNumber}

className="
border-b
pb-3
"


>


<div className="
flex
justify-between
">


<span className="
text-black
dark:text-blue-600
">

{order.orderNumber}

</span>


<span className="
font-bold
text-blue-600
">

TZS {order.amount.toLocaleString()}

</span>


</div>



<p className="text-gray-500">

{order.customer}

</p>



<span className="
text-sm
text-green-600
">

{order.status}

</span>


</div>


))

}



</div>

)

}