import api from "../../shared/api/axios";

export const getProducts = async (page, pageSize, keyword) => {
    const res = await api.get("/products", {
        params: {
           page,
           size: pageSize,
           keyword: keyword
        }
    })
    return res.data
}
