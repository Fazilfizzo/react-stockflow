import api from "../../shared/api/axios"

export const createCategory = async (data) => {
    const response = await api.post(
        "/categories",
        data
    )

    return response.data
}