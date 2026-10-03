import { formatPrice } from "../../../shared/formatPrice";

const PaymentCard=({payments}) => (
<div className="bg-white dark:bg-slate-900 border dark:border-slate-600 rounded-xl p-5">
  <h2 className="font-bold mb-3">Payment</h2>
   
   {payments.map(payment => (
    <div
    key={payment.paymentId}
    className="space-y-1"
    >
    
    <p>
        Method: <strong className="dark:text-blue-600">
            {" "}
            {payment.paymentMethod}
        </strong>
    </p>

    <p>
        Amount: <strong className="dark:text-blue-600">
            {" "}
            Tzs {formatPrice(payment.amount)}/=
        </strong>
    </p>

    <p>
        status: <strong className="dark:text-blue-600">
            {" "}
            {payment.status}
        </strong>
    </p>

    <p>
        PaymentReference: <strong className="dark:text-blue-600">
            {" "}
            {payment.transactionReference}
        </strong>
    </p>
    </div>
   ))}
</div>
)

export default PaymentCard;