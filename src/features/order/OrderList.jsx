import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    User,
    Calendar,
    Package,
    Eye,
    ShoppingCart
} from "lucide-react";

import { getOrders } from "./orderService";
import { formatPrice } from "../../shared/formatPrice";
import { formatDate } from "../../shared/formatDate";


const OrderList = () => {


    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    const navigate = useNavigate();



    useEffect(() => {

        const loadOrders = async () => {

            try {

                setLoading(true);

                const data = await getOrders();

                setOrders(data);


            } catch(error) {

                console.error(error);

                setError(
                    "Failed to load orders"
                );

            } finally {

                setLoading(false);

            }

        };


        loadOrders();


    }, []);




    if(loading){

        return (

            <div className="p-6">

                <div className="
                    animate-pulse
                    bg-gray-200
                    h-32
                    rounded-xl
                "/>

            </div>

        );

    }





    if(error){

        return (

            <div className="
                p-6
                text-red-600
                bg-white
                rounded-xl
                border
                dark:bg-slate-600
                dark:text-white
                dark:border-red-400
            ">
                {error}
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
                p-6
                space-y-6
            ">



                {/* Header */}

                <div>

                    <h1 className="
                        text-3xl
                        font-bold
                        text-gray-900
                        dark:text-white
                    ">
                        Customer Orders
                    </h1>


                    <p className="
                        text-gray-500
                        dark:text-blue-600
                        mt-1
                    ">
                        Manage customer purchases and order status.
                    </p>

                </div>





                {/* Empty State */}

                {
                    orders.length === 0 &&

                    <div className="
                        bg-white
                        dark:bg-slate-900
                        border
                        dark:border-slate-500
                        rounded-xl
                        p-10
                        text-center
                    ">

                        <ShoppingCart
                            className="
                                mx-auto
                                text-blue-400
                            "
                            size={40}
                        />

                        <p className="
                            mt-3
                            text-blue-400
                        ">
                            No orders found
                        </p>

                    </div>

                }





                {/* Orders */}

                <div className="
                    grid
                    gap-5
                ">


                {
                    orders.map(order => (


                        <div

                            key={order.orderId}

                            className="
                                bg-white
                                dark:bg-slate-900
                                border
                                dark:border-slate-600
                                rounded-2xl
                                p-6
                                shadow-sm
                                hover:shadow-md
                                transition
                            "

                        >



                            {/* Header */}

                            <div className="
                                flex
                                justify-between
                                items-start
                                mb-5
                            ">


                                <div>

                                    <h2 className="
                                        font-bold
                                        text-lg
                                        text-gray-900
                                        dark:text-white
                                    ">
                                        Order #{order.orderId}
                                    </h2>


                                    <div className="
                                        flex
                                        items-center
                                        gap-2
                                        text-gray-400
                                        text-sm
                                        mt-1
                                    ">

                                        <Calendar size={16}/>

                                        {formatDate(order.orderDate)}

                                    </div>


                                </div>




                                <OrderStatus
                                    status={order.orderStatus}
                                />


                            </div>





                            {/* Information */}

                            <div className="
                                grid
                                md:grid-cols-3
                                gap-5
                                border-t
                                pt-5
                            ">



                                <InfoItem

                                    icon={<User size={18}/>}

                                    label="Customer"

                                    value={order.customerName}

                                />



                                <InfoItem

                                    icon={<Package size={18}/>}

                                    label="Items"

                                    value={`${order.numberOfOrderItems} products`}

                                />



                                <InfoItem

                                    label="Total Amount"

                                    value={`Tzs ${formatPrice(order.totalAmount)}/=`}

                                    bold

                                />


                            </div>





                            {/* Action */}

                            <div className="
                                flex
                                justify-end
                                mt-6
                            ">


                                <button

                                    onClick={() =>
                                        navigate(
                                            `/orders/${order.orderId}`
                                        )
                                    }

                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        px-5
                                        py-2.5
                                        rounded-xl
                                        bg-blue-600
                                        text-white
                                        hover:bg-blue-700
                                        transition
                                    "

                                >

                                    <Eye size={18}/>

                                    View Details

                                </button>


                            </div>



                        </div>


                    ))

                }


                </div>


            </div>


        </div>

    );

};





const InfoItem = ({
    icon,
    label,
    value,
    bold
}) => (

    <div>

        <div className="
            flex
            items-center
            gap-2
            text-sm
            text-gray-400
            dark:text-gray-400
            mb-1
        ">

            {icon}

            {label}

        </div>


        <p className={`
            text-gray-900
            dark:text-gray-400
            ${bold ? "font-bold" : "font-medium"}
        `}>

            {value}

        </p>


    </div>

);






const OrderStatus = ({status}) => {


    const styles = {

        PAID:
        "bg-green-100 text-green-900",

        PENDING:
        "bg-yellow-100 text-yellow-900",

        CANCELLED:
        "bg-red-100 text-red-900",

    };


    return (

        <span
            className={`
                px-3
                py-1
                rounded-full
                text-sm
                font-medium
                ${styles[status] ?? 
                    "bg-gray-100 text-gray-700"
                }
            `}
        >

            {status}

        </span>

    );

};



export default OrderList;