import {
    Search,
    RotateCcw
} from "lucide-react";


const MovementFilters = ({
    filters,
    setFilters
}) => {


const resetFilters = () => {

setFilters({
    search:"",
    type:"ALL"
});

};



return (

<div

className="
bg-white
dark:bg-slate-900

border
border-slate-200
dark:border-slate-600

rounded-2xl

shadow-sm

p-4

sm:p-5

"

>


<div

className="
flex

flex-col

gap-4

lg:flex-row

lg:items-center

"

>



{/* Search */}

<div

className="
relative

flex-1

"

>


<Search

size={18}

className="
absolute
left-4
top-1/2
-translate-y-1/2

text-slate-400
dark:text-gray-400

"

/>



<input

type="text"

placeholder="Search product..."

value={filters.search}

onChange={(e)=>
setFilters({
...filters,
search:e.target.value
})
}

className="
w-full

rounded-xl

border

border-slate-300
dark:border-slate-600

py-3

pl-11

pr-4

text-sm

focus:outline-none

focus:ring-2

focus:ring-blue-500

focus:border-blue-500

transition

"

/>


</div>









{/* Type Filter */}


<select

value={filters.type}

onChange={(e)=>
setFilters({
...filters,
type:e.target.value
})
}

className="
w-full

lg:w-52

rounded-xl

dark:bg-slate-900

border

border-slate-300
dark:border-slate-600

px-4

py-3

text-sm

focus:ring-2

focus:ring-blue-500

outline-none

"

>


<option value="ALL">
All Movements
</option>


<option value="IN">
Stock In
</option>


<option value="OUT">
Stock Out
</option>


</select>









{/* Reset */}


<button

onClick={resetFilters}

className="
flex

items-center

justify-center

gap-2

w-full

lg:w-auto

px-4

py-3

rounded-xl

dark:bg-slate-900
dark:hover:bg-slate-900

border
border-slate-300
dark:border-slate-600

text-slate-700
dark:text-gray-400

hover:bg-slate-100
dark:hover:border-blue-600

transition

"

>


<RotateCcw className="dark:hover:text-blue-600" size={18}/>

Reset


</button>




</div>


</div>

);

};


export default MovementFilters;