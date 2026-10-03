import {
    ArrowDownCircle,
    ArrowUpCircle,
    CheckCircle,
    CircleX,
    Warehouse,
    PackageSearch
} from "lucide-react";



const MovementTable = ({
    movements,
    onSelect
}) => {



if(!movements || movements.length === 0){

    return (

        <div

        className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-600
        rounded-2xl
        p-10
        text-center
        "

        >

            <PackageSearch

            size={40}

            className="
            mx-auto
            text-slate-400
            dark:text-blue-600
            mb-3
            "

            />


            <h3

            className="
            font-semibold
            text-slate-700
            dark:text-blue-600
            "

            >
                No stock movements found
            </h3>


            <p

            className="
            text-sm
            text-slate-500
            dark:text-blue-600
            mt-1
            "

            >
                Try changing your filters
            </p>


        </div>

    );

}





return (

<div

className="
bg-white
dark:bg-slate-900
border
border-slate-200
dark:border-slate-600

rounded-2xl

overflow-hidden

shadow-sm

"

>


<div

className="
overflow-x-auto

"

>


<table

className="
min-w-237.5

w-full

text-sm

"

>


<thead

className="
bg-slate-50
dark:bg-slate-900

border-b

border-slate-200
dark:border-slate-600

"

>


<tr>


<TableHeader>
Date
</TableHeader>


<TableHeader>
Product
</TableHeader>


<TableHeader>
Type
</TableHeader>


<TableHeader>
Quantity
</TableHeader>


<TableHeader>
Reason
</TableHeader>


<TableHeader>
Reference
</TableHeader>


<TableHeader>
Supplier
</TableHeader>



</tr>


</thead>








<tbody>


{
movements.map((movement)=>(


<tr

key={movement.id}

onClick={()=>
onSelect(movement)
}

className="
border-b

last:border-none

active:bg-blue-100

cursor-pointer

transition

"


>



{/* DATE */}

<td

className="
px-6
py-4
text-slate-600
dark:text-gray-300
font-semibold
whitespace-nowrap
"

>

{
formatDate(
movement.movementDate
)
}


</td>









{/* PRODUCT */}


<td

className="
px-6
py-4
"

>


<div

className="
max-w-55
"

>


<p

className="
font-semibold

text-slate-900
dark:text-gray-300
truncate

"

>

{
movement.product_name
}

</p>


</div>


</td>









{/* TYPE */}


<td

className="
px-6
py-4
"

>


<MovementBadge

type={
movement.movementType
}

/>


</td>









{/* QUANTITY */}


<td

className="
px-6
py-4

"

>


<span

className={`

font-bold

${
movement.movementType === "IN"

?

"text-emerald-600"

:

movement.movementType === "OUT"

?

"text-red-600"

:

"text-amber-600"

}

`}

>


{
movement.movementType === "IN" || movement.movementType === "RESTOCK"

?

"+"

:

"-"

}


{
movement.quantity
}


</span>


</td>









{/* REASON */}


<td

className="
px-6
py-4

max-w-xs

"

>


<p

className="
truncate

text-slate-600
dark:text-gray-300
"

>

{
movement.reason
||
"N/A"
}

</p>


</td>









{/* REFERENCE */}


<td

className="
px-6
py-4

font-medium

text-slate-700
dark:text-gray-300
"

>

{
movement.reference
||
"-"
}


</td>









{/* SUPPLIER */}


<td

className="
px-6
py-4

text-slate-600
dark:text-gray-400
"

>

{
movement.supplierName
??
"N/A"
}


</td>






</tr>


))

}


</tbody>


</table>


</div>


</div>


);


};









const TableHeader = ({
    children
}) => (

<th

className="
px-6
py-4

text-left

font-semibold

text-slate-600
dark:text-gray-400

whitespace-nowrap

"

>

{children}

</th>

);









const formatDate = (date)=>{


if(!date)
return "-";



return new Date(date)

.toLocaleDateString(
"en-US",
{
year:"numeric",
month:"short",
day:"numeric"
}

);


};









const MovementBadge = ({
    type
}) => {



const config = {


IN:{

text:"Stock In",

icon:
<ArrowDownCircle size={15}/>,

style:
"bg-emerald-100 text-emerald-700"

},



OUT:{

text:"Stock Out",

icon:
<ArrowUpCircle size={15}/>,

style:
"bg-red-100 text-red-700"

},




RESTOCK:{

text:"Restock",

icon:
<Warehouse size={15}/>,

style:
"bg-purple-100 text-purple-700"

},




SALE:{

text:"Sale",

icon:
<CheckCircle size={15}/>,

style:
"bg-blue-100 text-blue-700"

},




CANCEL:{

text:"Cancelled",

icon:
<CircleX size={15}/>,

style:
"bg-red-100 text-red-700"

}


};





const item =

config[type]

||

{

text:type || "Unknown",

icon:null,

style:
"bg-slate-100 text-slate-700"

};







return (

<span

className={`

inline-flex

items-center

gap-1.5

px-3

py-1.5

rounded-full

text-xs

font-semibold

whitespace-nowrap

${item.style}

`}

>


{item.icon}


{item.text}


</span>

);


};





export default MovementTable;