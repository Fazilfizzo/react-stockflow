
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentCancelPage = () => {

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
                <FaTimesCircle 
                size={80}
                className="mx-auto text-red-600 mb-6 dark:text-red-600" />
                 <h1 className="text-3xl font-bold text-slate-800 dark:text-gray-400">
                     Payment Cancelled
                 </h1>
                 <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Your payment was cancelled.
                    No money has been charged.
                 </p>
                 <p className="mt-2 text-gray-500 dark:text-gray-300">
                    You can return to your cart when you are ready.
                 </p>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                  to="/cart"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                  >
                    Back to cart
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

export default PaymentCancelPage;