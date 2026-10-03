import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentSuccessPage = () => {

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
                <FaCheckCircle 
                size={80}
                className="mx-auto text-green-600 mb-6 dark:text-green-600" />
                 <h1 className="text-3xl font-bold text-slate-800  dark:text-gray-400">
                     Payment Successful
                 </h1>
                 <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Thank you for your purchase.
                    Your payment has been received successfully.
                 </p>
                 <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Your order is now being processed.
                 </p>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                  to="/orders"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                  >
                    View orders
                  </Link>
                  <Link
                  to="/products"
                  className="flex-1 border border-gray-300 hover:border-gray-100 dark:bg-gray-500 dark:text-white dark:hover:border-white py-3 rounded-lg transition"
                  >
                    Continue Shipping
                  </Link>
                 </div>
            </div>
        </div>
    )

}

export default PaymentSuccessPage;