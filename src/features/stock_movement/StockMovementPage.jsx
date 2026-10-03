import {
    useCallback,
    useEffect,
    useMemo,
    useState
} from "react";


import {
    RefreshCw,
    Download,
    PackageSearch
} from "lucide-react";


import MovementSummary from "./components/MovementSummary";
import MovementFilters from "./components/MovementFilters";
import MovementTable from "./components/MovementTable";
import MovementDetailsModal from "./components/MovementDetailsModal";


import api from "../../shared/api/axios";



const StockMovementPage = () => {


const [movements,setMovements] = useState([]);

const [selectedMovement,setSelectedMovement] = useState(null);

const [loading,setLoading] = useState(true);

const [error,setError] = useState(null);



const [filters,setFilters] = useState({

    search:"",
    type:"ALL"

});





const loadMovements = useCallback(async()=>{

    try {

        setLoading(true);
        setError(null);


        const response = await api.get(
            "/stock-movements"
        );


        setMovements(response.data);


    } catch(error){

        setError(
            "Failed to load stock movements"
        );

        console.log(error)


    } finally {

        setLoading(false);

    }


},[]);


useEffect(() => {

    const timer = setTimeout(() => {
        loadMovements();
    }, 0);


    return () => clearTimeout(timer);


}, [loadMovements]);









const filteredMovements = useMemo(()=>{


let result=[...movements];



const search =
filters.search
.trim()
.toLowerCase();




if(search){


result=result.filter(

movement =>

movement.product_name
?.toLowerCase()
.includes(search)

);


}




if(filters.type !== "ALL"){


result=result.filter(

movement =>

movement.movementType === filters.type

);


}



return result;



},[
movements,
filters
]);









return (


<div

className="
min-h-screen

bg-slate-50
dark:bg-slate-900

px-3

py-5

sm:px-6

lg:px-8

"

>


<div

className="
max-w-7xl

mx-auto

space-y-6

"

>







{/* HEADER */}



<header

className="
flex

flex-col

gap-5

lg:flex-row

lg:items-center

lg:justify-between

"

>



<div>


<div
className="
flex
items-center
gap-3
"
>


<div

className="
p-3

rounded-xl

bg-blue-100

text-blue-600

dark:bg-slate-900
dark:text-blue-600

"

>

<PackageSearch size={24}/>

</div>



<div>


<h1

className="
text-2xl

sm:text-3xl

font-bold

text-slate-900
dark:text-gray-300

"

>

Inventory Movements

</h1>


<p

className="
mt-1

text-sm

sm:text-base

text-slate-500
dark:text-gray-400

"

>

Monitor stock changes, adjustments and inventory activity.

</p>


</div>



</div>



</div>









{/* ACTION BUTTONS */}



<div

className="
flex

flex-col

sm:flex-row

gap-3

w-full

lg:w-auto

"

>


<button

onClick={loadMovements}

className="
flex

items-center

justify-center

gap-2

px-4

py-3

rounded-xl

bg-white
dark:bg-slate-900

border

border-slate-200
dark:border-slate-600

text-slate-700
dark:text-gray-400

hover:bg-slate-100
dark:hover:bg-slate-900
dark:hover:border-slate-500

transition

w-full

sm:w-auto

"

>


<RefreshCw

size={18}

className={
loading
?
"animate-spin"
:
""
}

/>


Refresh


</button>






<button

className="
flex

items-center

justify-center

gap-2

px-4

py-3

border

rounded-xl

bg-blue-600
dark:bg-slate-900

text-white
dark:text-gray-400

dark:border-slate-600

hover:bg-blue-700
dark:hover:bg-slate-900
dark:hover:border-blue-600

transition

w-full

sm:w-auto

"

>


<Download size={18}/>


Export


</button>



</div>





</header>









{/* ERROR */}



{
error &&


<div

className="
bg-red-50

border

border-red-200

text-red-700
dark:text-gray-400

rounded-xl

p-4

text-sm

"

>

{error}


</div>


}









{/* SUMMARY */}



<div

className="
bg-white
dark:bg-slate-900

rounded-2xl

border

border-slate-200
dark:border-slate-600

shadow-sm

p-4

sm:p-6

"

>


<MovementSummary/>


</div>









{/* FILTERS */}



<div

className="
bg-white
dark:bg-slate-900

rounded-2xl

border

border-slate-200
dark:border-slate-600

shadow-sm

p-4

sm:p-6

"

>


<MovementFilters

filters={filters}

setFilters={setFilters}

/>


</div>









{/* RESULT HEADER */}



<div

className="
flex

flex-col

gap-3

sm:flex-row

sm:items-center

sm:justify-between

"

>



<p

className="
text-sm

text-slate-500
dark:text-gray-400
"

>


Showing

{" "}


<span

className="
font-bold

text-slate-900
dark:text-gray-300

"

>

{filteredMovements.length}

</span>


{" "}

movements


</p>







{

filters.type !== "ALL" &&


<span

className="
inline-flex

w-fit

px-3

py-1

rounded-full

bg-blue-100

text-blue-700

text-xs

font-semibold

"

>

{filters.type}

</span>


}



</div>









{/* TABLE */}



<div

className="
bg-white
dark:bg-slate-900

rounded-2xl

border

border-slate-200
dark:border-slate-600

shadow-sm

overflow-hidden

"

>


{

loading ?

(

<div

className="
p-12

text-center

text-slate-500
dark:text-gray-400

"

>

Loading inventory movements...

</div>

)


:


filteredMovements.length === 0 ?

(

<div

className="
p-12

text-center
dark:text-gray-400

"

>


<p

className="
font-semibold

text-slate-700
dark:text-gray-400

"

>

No movements found

</p>


<p

className="
text-sm

text-slate-500
dark:text-gray-400
mt-1

"

>

Try changing your filters.

</p>


</div>


)


:

(

<MovementTable

movements={filteredMovements}

onSelect={setSelectedMovement}

/>

)


}



</div>






</div>









{

selectedMovement &&


<MovementDetailsModal

movement={selectedMovement}

close={()=>setSelectedMovement(null)}

/>


}




</div>


);


};


export default StockMovementPage;