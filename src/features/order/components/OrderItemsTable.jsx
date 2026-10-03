import { Package, ShoppingBag } from "lucide-react";
import { formatPrice } from "../../../shared/formatPrice";

const OrderItemsTable = ({ items }) => {

    if (!items || items.length === 0) {
        return (
            <div className="
                bg-white
                dark:bg-slate-900
                border
                rounded-2xl
                dark:border-slate-600
                shadow-sm
                p-10
                text-center
            ">
                <ShoppingBag
                    size={42}
                    className="mx-auto text-gray-400 mb-3 dark:text-gray-400"
                />

                <h3 className="font-semibold text-gray-700 dark:text-white">
                    No Order Items
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    This order doesn't contain any products.
                </p>
            </div>
        );
    }

    return (

        <div className="
            bg-white
            dark:bg-slate-900
            border
            dark:border-slate-600
            rounded-2xl
            shadow-sm
            overflow-hidden
        ">

            {/* Header */}

            <div className="
                flex
                items-center
                justify-between
                px-6
                py-5
                border-b
            ">

                <div className="flex items-center gap-3">

                    <div className="
                        p-2
                        rounded-lg
                        bg-blue-100
                        text-blue-600
                        dark:bg-slate-900
                        dark:text-blue-600
                    ">
                        <Package size={20} />
                    </div>

                    <div>

                        <h2 className="
                            font-semibold
                            text-gray-900
                            dark:text-gray-400
                        ">
                            Order Items
                        </h2>

                        <p className="
                            text-sm
                            text-gray-400
                        ">
                            {items.length} product{items.length > 1 ? "s" : ""}
                        </p>

                    </div>

                </div>

            </div>

            {/* Table */}

            <div className="overflow-x-auto">

                <table className="min-w-full text-sm">

                    <thead className="
                        bg-gray-50
                        text-gray-400
                        dark:bg-slate-900
                        
                        border-b
                    ">

                        <tr>

                            <th className="
                                px-6
                                py-4
                                text-left
                                font-semibold
                            ">
                                Product
                            </th>

                            <th className="
                                px-6
                                py-4
                                text-center
                                font-semibold
                            ">
                                Qty
                            </th>

                            <th className="
                                px-6
                                py-4
                                text-right
                                font-semibold
                            ">
                                Unit Price
                            </th>

                            <th className="
                                px-6
                                py-4
                                text-right
                                font-semibold
                            ">
                                Subtotal
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {items.map((item) => (

                            <tr
                                key={item.productName}
                                className="
                                    border-b
                                    last:border-none
                                    transition-colors
                                    
                                "
                            >

                                {/* Product */}

                                <td className="px-6 py-4">

                                    <div>

                                        <p className="
                                            font-medium
                                            text-gray-900
                                            dark:text-white
                                        ">
                                            {item.productName}
                                        </p>

                                    </div>

                                </td>

                                {/* Quantity */}

                                <td className="
                                    px-6
                                    py-4
                                    text-center
                                ">

                                    <span className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        min-w-10
                                        h-8
                                        rounded-full
                                        bg-blue-100
                                        text-blue-700
                                        dark:bg-blue-400
                                        dark:text-white
                                        font-semibold
                                    ">
                                        {item.quantity}
                                    </span>

                                </td>

                                {/* Price */}

                                <td className="
                                    px-6
                                    py-4
                                    text-right
                                    font-medium
                                    text-gray-700
                                    dark:text-white
                                ">
                                    TZS {formatPrice(item.price)}
                                </td>

                                {/* Subtotal */}

                                <td className="
                                    px-6
                                    py-4
                                    text-right
                                    font-bold
                                    text-gray-900
                                    dark:text-white
                                ">
                                    TZS {formatPrice(item.subTotal)}/=
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default OrderItemsTable;