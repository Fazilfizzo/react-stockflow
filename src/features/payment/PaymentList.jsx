import {useEffect,useState} from "react";
import {getPayments} from "./paymentApi";


const PaymentList=()=>{


const [payments,setPayments]=useState([]);

useEffect(()=>{


    const loadPayments = async()=>{

        const data = await getPayments();

        setPayments(data);

    };


    loadPayments();


},[]);



return (

<div className="p-6">


<h1 className="text-2xl font-bold mb-5">
Payments
</h1>



<table className="
w-full border
">

<thead>

<tr className="bg-gray-100">


<th className="p-3">
ID
</th>

<th>
Amount
</th>


<th>
Method
</th>


<th>
Status
</th>


<th>
Reference
</th>


</tr>


</thead>



<tbody>


{
payments.map(payment=>(


<tr key={payment.id}
className="border-b">


<td className="p-3">
{payment.id}
</td>


<td>
{payment.amount}
{" "}
{payment.currency}
</td>


<td>
{payment.paymentMethod}
</td>


<td>


<span
className="
px-2 py-1 rounded
bg-green-100
"
>

{payment.status}

</span>


</td>


<td>
{payment.transactionReference}
</td>



</tr>



))
}



</tbody>



</table>


</div>

)

}


export default PaymentList;