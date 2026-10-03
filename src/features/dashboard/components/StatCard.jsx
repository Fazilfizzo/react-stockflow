export default function StatCard({
title,
value,
icon
}){


return (

<div className="
bg-white
dark:bg-slate-900
border
border-slate-200
dark:border-slate-700
rounded-2xl
p-6
shadow
flex
items-center
justify-between
">


<div>

<p className="
text-gray-500
dark:text-gray-100
font-medium
">

{title}

</p>


<h2 className="
text-3xl
text-blue-600
dark:text-blue-600
font-bold
mt-2
">

{value}

</h2>


</div>



<div className="
text-blue-600
text-3xl
">

{icon}

</div>


</div>

)

}