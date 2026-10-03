import {
    X,
    Package,
    Calendar,
    Hash,
    User,
    FileText
} from "lucide-react";



const MovementDetailsModal = ({ movement, close }) => {

    const movementTypeStyles = {
    "CANCEL": "bg-red-100 text-red-700",
    "RESTOCK": "bg-purple-100 text-purple-700",
    "SALE": "bg-blue-100 text-blue-700",
    "OUT": "bg-orange-100 text-orange-700",
    "IN": "bg-green-100 text-green-700",
    "RETURN": "bg-yellow-100 text-yellow-700",
    "ADJUSTMENT": "bg-gray-100 text-gray-700"
    }


    // const isStockIn = movement.movementType === "IN";



    return (


<div

className="
fixed
inset-0

z-50

flex
items-center
justify-center

bg-black/50

backdrop-blur-sm

p-3

sm:p-5

"

onClick={close}

>





<div

className="
bg-white
dark:bg-slate-900
w-full

max-w-lg

max-h-[90vh]

rounded-2xl

shadow-2xl

overflow-hidden

flex

flex-col

"

onClick={
e=>e.stopPropagation()
}

>





{/* HEADER */}

<div

className="
flex

items-start

justify-between

gap-4

px-4

py-4

sm:px-6

sm:py-5

border-b

"

>


<div className="min-w-0 border-slate-600">


<h2

className="
text-lg

sm:text-xl

font-bold

text-slate-900
dark:text-gray-300
truncate

"

>

Movement Details

</h2>



<p

className="
text-sm

text-slate-500
dark:text-gray-300
mt-1

"

>

Stock transaction information

</p>


</div>






<button

onClick={close}

className="
p-2.5

rounded-xl

dark:bg-blue-600

hover:bg-slate-100
dark:hover:bg-blue-800

transition

text-slate-600
dark:text-white

"

>


<X size={20}/>


</button>



</div>









{/* BODY */}


<div

className="
overflow-y-auto

p-4

sm:p-6

space-y-5

"

>






{/* PRODUCT CARD */}



<div

className="
flex

items-center

gap-4

bg-slate-50
dark:bg-slate-900

rounded-xl

p-4

"

>


<div

className="
p-3

rounded-xl

bg-blue-100
dark:bg-slate-900

text-blue-600

shrink-0

"

>

<Package size={24}/>

</div>





<div className="min-w-0">


<p

className="
text-sm

text-slate-500
dark:text-gray-400
"

>

Product

</p>


<p

className="
font-semibold

text-slate-900
dark:text-gray-300
truncate

"

>

{movement.product_name}

</p>


</div>


</div>









{/* DETAILS */}


<div

className="
grid

grid-cols-1

sm:grid-cols-2

gap-4

"

>


<DetailItem

icon={<Hash size={16}/>}

label="Reference"

value={
movement.reference || "-"
}

/>



<DetailItem

icon={<Package size={16}/>}

label="Quantity"

value={`${movement.quantity} units`}

/>




<DetailItem

icon={<Calendar size={16}/>}

label="Date"

value={
new Date(
movement.movementDate
)
.toLocaleDateString()
}

/>




<DetailItem

icon={<User size={16}/>}

label="Supplier"

value={
movement.supplierName ?? "N/A"
}

/>



</div>









{/* MOVEMENT TYPE */}


<div>


<p

className="
text-sm

text-slate-500
dark:text-gray-400
mb-2

"

>

Movement Type

</p>



<span
className={`
inline-flex
items-center
px-3
py-1.5
rounded-full
text-sm
font-semibold
${movementTypeStyles[movement.movementType] || "bg-gray-100 text-gray-700"}


`}

>

{movement.movementType}

</span>


</div>









{/* REASON */}



<div>


<p

className="
text-sm
text-slate-500
dark:text-gray-300
mb-2

"

>

Reason

</p>





<div

className="
flex

gap-3

bg-slate-50
dark:bg-slate-900
dark:border-slate-600
rounded-xl

p-4

"

>


<FileText

size={18}

className="
text-slate-500

shrink-0

mt-1

"

/>



<p

className="
text-slate-700
dark:text-gray-400
text-sm

wrap-break-word

"

>

{
movement.reason
||
"No reason provided"
}

</p>



</div>



</div>






</div>









{/* FOOTER */}


<div

className="
border-t

px-4

py-4

sm:px-6

flex

justify-end

"

>


<button

onClick={close}

className="
w-full

sm:w-auto

px-6

py-3

rounded-xl

bg-slate-900
dark:hover:bg-blue-700

text-white

font-medium

hover:bg-slate-700

transition

"

>

Close

</button>



</div>





</div>





</div>


    );

};







const DetailItem = ({
    icon,
    label,
    value
}) => (


<div

className="
min-w-0

"

>


<div

className="
flex

items-center

gap-2

text-slate-500
dark:text-gray-400
text-sm

mb-1

"

>

{icon}

<span>
{label}
</span>


</div>





<p

className="
font-semibold

text-slate-900
dark:text-gray-300
truncate

"

>

{value}


</p>



</div>

);





export default MovementDetailsModal;