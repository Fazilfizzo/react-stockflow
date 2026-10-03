import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import api from "../../shared/api/axios";

import Spinner from "../../shared/Spinner";

import OrderHeader from "./components/OrderHeader";
import OrderItemsTable from "./components/OrderItemsTable";
import PaymentCard from "./components/PaymentCard";
import OrderSummary from "./components/OrderSummary";
import CustomerCard from "./components/CustomerCard";


const OrderDetailsPage = () => {


    const { id } = useParams();

    const navigate = useNavigate();


    const [order, setOrder] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);



    useEffect(() => {

    const loadOrder = async () => {

        try {

            setLoading(true);
            setError(null);


            const response = await api.get(
                `/orders/${id}`
            );


            setOrder(response.data);


        } catch(error) {

            console.error(error);

            setError(
                "Failed to load order details"
            );


        } finally {

            setLoading(false);

        }

    };


    loadOrder();


}, [id]);



    if(loading){

        return (

            <div className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-gray-50
            ">

                <Spinner />

            </div>

        );

    }





    if(error){

        return (

            <div className="
                p-6
                bg-red-50
                text-red-700
                rounded-xl
                m-6
                border
                dark:bg-slate-600
                dark:text-white
                dark:border-red-400
            ">
                {error}
            </div>

        );

    }





    if(!order){

        return (

            <div className="
                p-6
                text-gray-500
                dark:bg-slate-700
                dark:text-white
            ">
                Order not found
            </div>

        );

    }





    return (

        <div className="
            min-h-screen
            bg-gray-50
            dark:bg-slate-900
        ">


            <div className="
                max-w-7xl
                mx-auto
                px-6
                py-8
                space-y-8
            ">



                {/* Back button */}

                <button

                    onClick={() =>
                        navigate("/orders")
                    }

                    className="
                        flex
                        items-center
                        gap-2
                        text-gray-600
                        hover:text-gray-900
                        dark:text-gray-400
                        dark:hover:text-white
                        transition
                    "

                >

                    <ArrowLeft className="text-blue-600" size={20}/>

                    Back to Orders

                </button>





                {/* Header */}

                <OrderHeader order={order}/>






                {/* Main Content */}

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                    gap-6
                ">



                    {/* Left Side */}

                    <div className="
                        lg:col-span-2
                        space-y-6
                    ">


                        <section className="
                            bg-white
                            dark:bg-slate-900
                            rounded-2xl
                            border
                            dark:border-slate-600
                            shadow-sm
                            overflow-hidden
                        ">

                            <OrderItemsTable
                                items={order.items}
                            />

                        </section>





                        <section className="
                            bg-white
                            dark:bg-slate-900
                            rounded-2xl
                            border
                            dark:border-slate-600
                            shadow-sm
                            p-6
                        ">

                            <PaymentCard
                                payments={order.payments}
                            />

                        </section>



                    </div>







                    {/* Right Side */}

                    <div className="
                        space-y-6
                    ">


                        <section className="
                            bg-white
                            dark:bg-slate-900
                            rounded-2xl
                            border
                            dark:border-slate-600
                            shadow-sm
                            p-6
                        ">

                            <OrderSummary
                                order={order}
                            />

                        </section>





                        <section className="
                            bg-white
                            dark:bg-slate-900
                            rounded-2xl
                            border
                            dark:border-slate-600
                            shadow-sm
                            p-6
                        ">

                            <CustomerCard
                                customer={order.customer}
                            />

                        </section>



                    </div>



                </div>




            </div>


        </div>

    );

};


export default OrderDetailsPage;