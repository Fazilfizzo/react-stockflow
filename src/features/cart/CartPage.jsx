import { useEffect } from "react";
import { Link } from "react-router-dom";

import useCartStore from "../../shared/store/cartStore";

import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";


const CartPage = () => {


    const fetchCart = useCartStore(
        state => state.fetchCart
    );


    const items = useCartStore(
        state => state.items
    );


    const totalItems = useCartStore(
        state => state.totalItems
    );



    useEffect(() => {

        fetchCart();

    }, [fetchCart]);




    if(!items || items.length === 0){

        return <EmptyCart/>

    }




    return (

        <main
        className="
        min-h-screen
        
        bg-slate-50
        dark:bg-slate-900
        
        px-3
        py-5
        
        sm:px-6
        sm:py-8
        
        lg:px-10
        "
        >



            <div
            className="
            max-w-7xl
            mx-auto
            "
            >




                {/* HEADER */}

                <header
                className="
                flex
                
                flex-col
                
                gap-4
                
                sm:flex-row
                
                sm:items-center
                
                sm:justify-between
                
                mb-6
                
                sm:mb-8
                "
                >



                    <div>

                        <h1
                        className="
                        text-2xl
                        
                        sm:text-3xl
                        
                        font-bold
                        text-slate-900
                        dark:text-white
                        "
                        >

                            Shopping Cart

                        </h1>


                        <p
                        className="
                        mt-1
                        
                        text-sm
                        
                        text-slate-500
                        dark:text-white
                        "
                        >

                            Review your products before checkout

                        </p>


                    </div>





                    <div
                    className="
                    flex
                    
                    items-center
                    
                    justify-between
                    
                    sm:justify-end
                    
                    gap-3
                    "
                    >



                        <span
                        className="
                        bg-white
                        dark:bg-slate-800
                        
                        border
                        border-slate-200
                        dark:border-slate-700
                        
                        rounded-full
                        
                        px-4
                        py-2
                        
                        text-sm
                        
                        font-medium
                        
                        text-slate-600
                        dark:text-white
                        
                        shadow-sm
                        "
                        >

                            {totalItems}
                            {" "}
                            {totalItems === 1 ? "item" : "items"}

                        </span>





                        <Link
                        to="/products"

                        className="
                        text-sm
                        
                        font-medium
                        
                        text-blue-600
                        
                        hover:text-blue-700

                        dark:text-white
                        dark:border-blue-400
                        "
                        >

                            Continue Shopping

                        </Link>



                    </div>



                </header>









                {/* CONTENT */}


                <div

                className="
                
                grid
                
                grid-cols-1
                
                gap-5
                
                md:gap-8
                
                lg:grid-cols-3
                
                "

                >





                    {/* CART ITEMS */}


                    <section

                    className="
                    
                    lg:col-span-2
                    
                    bg-white
                    dark:bg-slate-800
                    
                    rounded-2xl
                    
                    border
                    
                    border-slate-200
                    dark:border-slate-900
                    
                    shadow-sm
                    
                    p-3
                    
                    sm:p-5
                    
                    lg:p-6
                    
                    "

                    >



                        <div
                        className="
                        flex
                        items-center
                        justify-between
                        mb-5
                        "
                        >


                            <h2
                            className="
                            text-lg
                            sm:text-xl
                            font-semibold
                            text-slate-800
                            dark:text-white
                            "
                            >

                                Cart Items

                            </h2>


                        </div>






                        <div

                        className="
                        space-y-4
                        
                        sm:space-y-5
                        "

                        >

                            {
                                items.map(item => (

                                    <CartItem

                                    key={item.cartItemId}

                                    item={item}

                                    />

                                ))
                            }


                        </div>




                    </section>









                    {/* SUMMARY */}



                    <aside

                    className="
                    
                    lg:sticky
                    
                    lg:top-6
                    
                    h-fit
                    
                    "

                    >

                        <OrderSummary/>


                    </aside>




                </div>




            </div>



        </main>

    )

}



export default CartPage;