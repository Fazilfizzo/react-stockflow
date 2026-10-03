import api from "../../shared/api/axios";


export const getStockMovements = async () => {
    const response = await api.get("/stock-movements");
    return response.data;
};

export const getStockSummary = async () => {
    const response = await api.get("/stock-movements/summary");
    return response.data;
};



