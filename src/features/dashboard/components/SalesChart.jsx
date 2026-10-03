import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
}
from "recharts";


export default function SalesChart({data}){


return (

<ResponsiveContainer
width="100%"
height={300}
>


<LineChart data={data}>


<XAxis dataKey="month"/>

<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="sales"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>

)

}