import { useEffect, useState } from "react";

import {
    Package,
    ArrowDownCircle,
    ArrowUpCircle,
    AlertTriangle
} from "lucide-react";

import api from "../../../shared/api/axios";



const MovementSummary = () => {


    const [summary, setSummary] = useState({

        totalMovements: 0,

        stockIn: 0,

        stockOut: 0,

        lowStock: 0

    });



    const [loading, setLoading] = useState(true);



    useEffect(() => {


        const loadSummary = async () => {


            try {


                const response = await api.get(
                    "/stock-movements/summary"
                );



                setSummary({

                    totalMovements:
                        response.data.totalMovements ?? 0,


                    stockIn:
                        response.data.stockIn ?? 0,


                    stockOut:
                        response.data.stockOut ?? 0,


                    lowStock:
                        response.data.lowStock ?? 0

                });



            } catch(error) {


                console.error(
                    "Failed to load movement summary",
                    error
                );


            } finally {


                setLoading(false);


            }


        };



        loadSummary();



    }, []);







    if(loading){


        return (

            <div

            className="
            grid

            grid-cols-1

            sm:grid-cols-2

            xl:grid-cols-4

            gap-4

            "

            >

                {
                    [1,2,3,4].map(item=>(

                        <div

                        key={item}

                        className="
                        h-36

                        rounded-2xl

                        bg-slate-200

                        animate-pulse

                        "

                        />

                    ))
                }


            </div>

        );


    }






    return (


        <div

        className="
        grid

        grid-cols-1

        sm:grid-cols-2

        xl:grid-cols-4

        gap-4

        "

        >



            <SummaryCard

                title="Total Movements"

                value={summary.totalMovements}

                subtitle="Inventory transactions"

                icon={<Package size={24}/>}

                color="blue"

            />





            <SummaryCard

                title="Stock Added"

                value={summary.stockIn}

                subtitle="Products received"

                icon={
                    <ArrowDownCircle size={24}/>
                }

                color="emerald"

            />






            <SummaryCard

                title="Stock Removed"

                value={summary.stockOut}

                subtitle="Products issued"

                icon={
                    <ArrowUpCircle size={24}/>
                }

                color="red"

            />







            <SummaryCard

                title="Low Stock"

                value={summary.lowStock}

                subtitle="Needs attention"

                icon={
                    <AlertTriangle size={24}/>
                }

                color="amber"

            />




        </div>


    );


};









const colorStyles = {


    blue: {


        icon:
        "bg-blue-100 text-blue-600",


        hover:
        "hover:border-blue-300"


    },



    emerald:{


        icon:
        "bg-emerald-100 text-emerald-600",


        hover:
        "hover:border-emerald-300"


    },



    red:{


        icon:
        "bg-red-100 text-red-600",


        hover:
        "hover:border-red-300"


    },



    amber:{


        icon:
        "bg-amber-100 text-amber-600",


        hover:
        "hover:border-amber-300"


    }



};









const SummaryCard = ({
    title,
    value,
    subtitle,
    icon,
    color
}) => {



    const style =
        colorStyles[color];




    return (



        <div

        className={`

        bg-white
        dark:bg-slate-900

        border

        border-slate-200
        dark:border-slate-600

        rounded-2xl

        p-4

        sm:p-6

        shadow-sm

        transition-all

        duration-300

        hover:shadow-lg

        hover:-translate-y-1

        ${style.hover}

        `}

        >





            <div

            className="
            flex

            items-start

            justify-between

            gap-4

            "

            >





                <div>


                    <p

                    className="
                    text-sm

                    font-medium

                    text-slate-500
                    dark:text-gray-400

                    "

                    >

                        {title}


                    </p>





                    <h2

                    className="
                    mt-2

                    text-2xl

                    sm:text-3xl

                    font-bold

                    text-slate-900
                    dark:text-gray-300

                    "

                    >

                        {value}


                    </h2>






                    <p

                    className="
                    mt-2

                    text-xs

                    sm:text-sm

                    text-slate-400
                    dark:text-gray-400

                    "

                    >

                        {subtitle}


                    </p>



                </div>








                <div

                className={`

                flex

                items-center

                justify-center


                w-11

                h-11


                sm:w-12

                sm:h-12


                rounded-xl


                shrink-0


                ${style.icon}

                `}

                >

                    {icon}


                </div>





            </div>



        </div>


    );


};




export default MovementSummary;