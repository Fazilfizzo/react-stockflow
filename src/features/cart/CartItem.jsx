import { formatPrice } from "../../shared/formatPrice";
import useCartStore from "../../shared/store/cartStore";


const CartItem = ({ item }) => {


    const updateQuantity = useCartStore(
        state => state.updateQuantity
    );


    const removeCartItem = useCartStore(
        state => state.removeCartItem
    );



    return (

        <article
        className="
        flex
        flex-col
        
        xs:flex-col
        sm:flex-row
        
        gap-4
        sm:gap-6
        
        p-4
        sm:p-5
        
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-700
        
        bg-white
        dark:bg-slate-900
        
        hover:shadow-md
        transition
        "
        >




            {/* IMAGE */}

            <div
            className="
            flex
            justify-center
            sm:justify-start
            "
            >

                <img
                src={item.productImage}
                alt={item.productName}

                className="
                w-28
                h-28

                xs:w-32
                xs:h-32

                sm:w-36
                sm:h-36

                lg:w-40
                lg:h-40

                rounded-xl
                object-cover
                "
                />

            </div>






            {/* DETAILS */}

            <div
            className="
            flex-1
            "
            >



                <h2
                className="
                text-base
                xs:text-lg
                sm:text-xl
                
                font-semibold
                text-slate-900
                dark:text-white
                "
                >

                    {item.productName}

                </h2>



                <p
                className="
                text-sm
                text-slate-500
                dark:text-white
                mt-2
                "
                >

                    Unit price:

                    <span
                    className="
                    ml-1
                    font-medium
                    text-slate-700
                    dark:text-white
                    "
                    >
                        Tzs {formatPrice(item.unitPrice)}
                    </span>

                </p>






                {/* QUANTITY */}

                <div
                className="
                flex
                items-center
                gap-3
                
                mt-4
                "
                >


                    <button
                    disabled={item.quantity <= 1}

                    onClick={() =>
                        updateQuantity(
                            item.cartItemId,
                            item.quantity - 1
                        )
                    }

                    className="
                    w-8
                    h-8
                    
                    sm:w-9
                    sm:h-9
                    
                    rounded-lg
                    border
                    border-slate-300
                    dark:border-slate-900
                    
                    text-lg
                    font-bold
                    
                    hover:bg-slate-600
                    hover:text-white

                    dark:bg-slate-600
                    dark:hover:bg-slate-900
                    dark:hover:border-white
                    dark:hover:text-white
                    
                    disabled:opacity-40
                    "
                    >

                        -

                    </button>




                    <span
                    className="
                    w-8
                    text-center
                    
                    text-lg
                    font-semibold
                    "
                    >

                        {item.quantity}

                    </span>





                    <button

                    onClick={() =>
                        updateQuantity(
                            item.cartItemId,
                            item.quantity + 1
                        )
                    }

                    className="
                    w-8
                    h-8
                    
                    sm:w-9
                    sm:h-9
                    
                    rounded-lg
                    
                    bg-blue-600
                    text-white

                    dark:bg-blue-600
                    dark:text-white
                    
                    text-lg
                    font-bold
                    
                    hover:bg-blue-700
                    dark:hover:border-blue-400
                    transition
                    "
                    >

                        +

                    </button>



                </div>



            </div>







            {/* TOTAL + REMOVE */}

            <div

            className="
            flex
            
            sm:flex-col
            
            items-center
            justify-between
            
            sm:items-end
            
            gap-3
            
            "

            >



                <div
                className="
                text-left
                sm:text-right
                "
                >

                    <p
                    className="
                    text-xs
                    uppercase
                    text-slate-400
                    dark:text-white
                    "
                    >
                        Total
                    </p>


                    <p
                    className="
                    text-lg
                    sm:text-xl
                    
                    font-bold
                    text-blue-600
                    dark:text-white
                    "
                    >

                        Tzs {formatPrice(item.total)}

                    </p>


                </div>






                <button

                onClick={() =>
                    removeCartItem(item.cartItemId)
                }

                className="
                p-2
                text-sm
                font-medium
                bg-red-600
                text-white
                hover:bg-red-800

                dark:bg-red-600
                dark:text-white
                hover:text-white

                rounded-xl
                
                transition
                "

                >

                    Remove

                </button>



            </div>



        </article>

    )

}



export default CartItem;