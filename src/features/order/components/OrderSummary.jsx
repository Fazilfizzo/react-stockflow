import { ReceiptText, CircleDollarSign } from "lucide-react";
import { formatPrice } from "../../../shared/formatPrice";

const OrderSummary = ({ order }) => {

    return (

        <div
            className="
                bg-white
                dark:bg-slate-900
                border
                dark:border-slate-600
                rounded-2xl
                shadow-sm
                overflow-hidden
            "
        >

            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    gap-3
                    px-6
                    py-4
                    border-b
                "
            >

                <div
                    className="
                        p-2
                        rounded-lg
                        bg-blue-100
                        text-blue-600
                        dark:bg-slate-900
                        dark:text-blue-500
                    "
                >
                    <ReceiptText size={20} />
                </div>

                <div>

                    <h2 className="font-semibold text-gray-900 dark:text-gray-400">
                        Order Summary
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Financial overview
                    </p>

                </div>

            </div>

            {/* Content */}

            <div className="p-6 space-y-4">

                <div className="flex justify-between">

                    <span className="text-gray-500 dark:text-white">
                        Total Amount
                    </span>

                    <span className="font-semibold text-gray-900 dark:text-blue-600">
                        TZS {formatPrice(order.totalAmount)}/=
                    </span>

                </div>

            </div>

            {/* Highlight Total */}

            <div
                className="
                    bg-blue-50
                    dark:bg-slate-900
                    border-t
                    px-6
                    py-5
                    gap-0.5
                "
            >

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-1">

                        <CircleDollarSign
                            size={20}
                            className="text-blue-600"
                        />

                        <span className="font-medium text-gray-700 dark:text-gray-400">
                            Grand Total
                        </span>

                    </div>

                    <span
                        className="
                            text-xl
                            font-bold
                            text-blue-700
                        "
                    >
                        TZS {formatPrice(order.totalAmount)}/=
                    </span>

                </div>

            </div>

        </div>

    );

};

export default OrderSummary;