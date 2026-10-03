import {
    Calendar,
    Hash,
    CheckCircle2,
    Clock3,
    CircleX
} from "lucide-react";

const OrderHeader = ({ order }) => {

    const statusConfig = {

        PAID: {
            icon: <CheckCircle2 size={16} />,
            style: "bg-green-100 text-green-700"
        },

        PENDING: {
            icon: <Clock3 size={16} />,
            style: "bg-yellow-100 text-yellow-700"
        },

        CANCELLED: {
            icon: <CircleX size={16} />,
            style: "bg-red-100 text-red-700"
        }

    };


    const status =
        statusConfig[order.status] ?? {

            icon: <Clock3 size={16} />,

            style: "bg-gray-100 text-gray-700"

        };


    return (

        <div
            className="
                bg-white
                border
                rounded-2xl
                shadow-sm
                p-6
                dark:bg-slate-900
                dark:border-slate-600
            "
        >

            <div
                className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-5
                "
            >

                {/* Left */}

                <div>

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-400
                            mb-2
                        "
                    >

                        <Hash size={18} />

                        <span className="text-sm">
                            Order Reference
                        </span>

                    </div>

                    <h1
                        className="
                            text-3xl
                            font-bold
                            text-gray-900
                            dark:text-gray-400
                        "
                    >
                        #{order.id}
                    </h1>

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            mt-3
                            text-gray-500
                            dark:text-gray-400
                        "
                    >

                        <Calendar size={16} />

                        <span className="text-sm">

                            {new Date(
                                order.orderDate
                            ).toLocaleString()}

                        </span>

                    </div>

                </div>





                {/* Status */}

                <div>

                    <span
                        className={`
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            font-medium
                            ${status.style}
                        `}
                    >

                        {status.icon}

                        {order.status}

                    </span>

                </div>

            </div>

        </div>

    );

};

export default OrderHeader;