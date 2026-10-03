import { useCallback, useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import useCartStore from "../../shared/store/cartStore";
import Spinner from "../../shared/Spinner";
import { FaSearch } from "react-icons/fa";
import api from "../../shared/api/axios";


export default function ProductListPage() {


    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");

    const [page, setPages] = useState(0);

    const [totalPages, setTotalPages] = useState(0);

    const [pageSize] = useState(50);

    const [loading, setLoading] = useState(false);



    const fetchCart = useCartStore(
        state => state.fetchCart
    );



    const fetchProducts = useCallback(async () => {

        setLoading(true);


        try {

            const response = await api.get("/products", {

                params: {
                    page,
                    size: pageSize,
                    keyword: search
                }

            });


            setProducts(response.data.content);

            setTotalPages(response.data.totalPages);


        } catch(error) {

            console.error(error);

        }
        finally {

            setLoading(false);

        }


    }, [page, pageSize, search]);





    useEffect(() => {

        const timer = setTimeout(() => {

            fetchProducts();

        }, 500);


        return () => clearTimeout(timer);


    }, [fetchProducts]);





    useEffect(() => {

        fetchCart();

    }, [fetchCart]);





    if(loading){

        return <Spinner />;

    }






    return (


<section

className="
p-4

bg-white
dark:bg-slate-950

min-h-full

transition-colors
duration-300
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





{/* Search */}


<div

className="
hidden

md:flex

items-center

w-80

px-3

py-2


rounded-lg


bg-white
dark:bg-gray-900


border

border-slate-200
dark:border-gray-700


transition-colors

"

>


<FaSearch

className="
text-gray-500
dark:text-gray-400
"

/>



<input

type="text"

placeholder="Search products"

value={search}

onChange={(e)=>{

    setSearch(e.target.value);

    setPages(0);

}}


className="
bg-transparent

outline-none

px-3

w-full

text-sm


text-slate-800
dark:text-white


placeholder:text-gray-400

"

/>



</div>








<span

className="
text-sm

text-gray-500
dark:text-gray-300
"

>

{products.length} items

</span>






</div>








{/* Products */}



{
products.length === 0 && (


<div

className="
text-center

py-20

text-gray-500
dark:text-gray-400
"

>

No products found

</div>


)

}







<div

className="
grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

xl:grid-cols-4

gap-6
"

>


{

products.map(product => (

<ProductCard

key={product.id}

product={product}

/>

))

}


</div>









{/* Pagination */}


<div

className="
mt-10

flex

justify-center

items-center

gap-2

flex-wrap

"

>




<button

disabled={page === 0}

onClick={() =>
    setPages(prev => prev - 1)
}

className="
px-4

py-2

rounded-lg


bg-slate-800

dark:bg-gray-700


text-white


disabled:bg-gray-400

dark:disabled:bg-gray-800

transition

"

>

Previous

</button>









{

Array.from(
{length: totalPages},

(_, index)=>(


<button

key={index}

onClick={()=>setPages(index)}


className={`

px-4

py-2

rounded-lg

transition


${
page === index

?

"bg-blue-600 text-white"

:

`
bg-white
dark:bg-gray-800

text-slate-700
dark:text-slate-200

border
border-slate-200
dark:border-gray-700


hover:bg-gray-100
dark:hover:bg-gray-700
`

}

`}

>

{index + 1}

</button>


)

)


}







<button

disabled={
    page === totalPages - 1 ||
    totalPages === 0
}


onClick={() =>
    setPages(prev => prev + 1)
}


className="
px-4

py-2

rounded-lg


bg-slate-800

dark:bg-gray-700


text-white


disabled:bg-gray-400

dark:disabled:bg-gray-800


transition

"

>

Next

</button>







</div>







</section>


    );

}