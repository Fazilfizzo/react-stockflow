import { useState } from "react";
import toast from "react-hot-toast";

import { formatPrice } from "../../shared/formatPrice";
import useCartStore from "../../shared/store/cartStore";
import api from "../../shared/api/axios";


const OrderSummary = () => {


    const [loading, setLoading] = useState(false);



    const total = useCartStore(
        state => state.total
    );


    const checkout = useCartStore(
        state => state.checkout
    );





    const handleCheckout = async () => {


        if(loading) return;


        try {

            setLoading(true);

            console.log("Starting to checkout")


            const res = await api.post(
                "/payment/checkout"
            );

            console.log(res.status)

            // console.log("Redirecting to stripe checkout")

            

            toast.success(
                "Redirecting to Stripe checkout"
            );



            window.location.href =
                res.data.checkoutUrl;

        checkout();

        } catch(error){


            toast.error(
                error?.response?.data?.message
                ||
                "Checkout failed"
            );


            setLoading(false);

        }


    };






    return (


        <aside

        className="
        
        w-full
        
        bg-white
        dark:bg-slate-900
        
        rounded-2xl
        
        border
        border-slate-200
        dark:border-slate-900
        
        shadow-sm
        
        p-5
        
        sm:p-6
        
        lg:sticky
        
        lg:top-6
        
        "

        >






            {/* HEADER */}


            <h2

            className="
            
            text-lg
            
            sm:text-xl
            
            font-bold
            
            text-slate-900
            dark:text-white
            
            mb-6
            
            "

            >

                Order Summary

            </h2>









            {/* SUBTOTAL */}


            <div

            className="
            
            flex
            
            justify-between
            
            items-center
            
            text-sm
            
            sm:text-base
            
            text-slate-600
            dark:text-white
            mb-4
            
            "

            >

                <span>
                    Subtotal
                </span>


                <span
                className="
                font-medium
                text-slate-800
                dark:text-white
                "
                >
                    Tzs {formatPrice(total)}
                </span>


            </div>








            <div
            className="
            border-t
            border-slate-200
            dark:border-slate-900
            "
            />









            {/* TOTAL */}


            <div

            className="
            
            flex
            
            justify-between
            
            items-center
            
            mt-5
            
            "

            >

                <span
                className="
                text-base
                
                sm:text-lg
                
                font-semibold
                
                text-slate-800
                dark:text-white
                "
                >

                    Total

                </span>




                <span
                className="
                
                text-xl
                
                sm:text-2xl
                
                font-bold
                
                text-blue-600
                
                "
                >

                    Tzs {formatPrice(total)}

                </span>


            </div>









            {/* CHECKOUT BUTTON */}



            <button

            disabled={loading}

            onClick={handleCheckout}


            className="
            
            w-full
            
            mt-7
            
            py-3
            
            sm:py-3.5
            
            rounded-xl
            
            bg-blue-600
            
            text-white
            
            font-semibold
            
            hover:bg-blue-700
            
            active:scale-[0.98]
            
            transition
            
            duration-200
            
            disabled:opacity-60
            
            disabled:cursor-not-allowed

            dark:bg-blue-600
            dark:text-white
            dark:hover:border-gray-700
            
            "

            >

                {
                    loading
                    ?
                    "Redirecting..."
                    :
                    "Proceed to Checkout"
                }


            </button>








            {/* TRUST MESSAGE */}


            <p

            className="
            
            mt-4
            
            text-xs
            
            sm:text-sm
            
            text-center
            
            text-slate-500
            dark:text-white
            
            "

            >

                🔒 Secure payment powered by Stripe

            </p>




        </aside>


    )

}


export default OrderSummary;