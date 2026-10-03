import api from "../../shared/api/axios";


export const getDashboardSummary = async()=>{

    const response =
        await api.get("/dashboard/summary");

    return response.data;

};



export const getSalesChart = async()=>{

    const response =
        await api.get("/dashboard/sales-chart");

    return response.data;

};



export const getRecentOrders = async()=>{

    const response =
        await api.get("/dashboard/recent-orders");

    return response.data;

};