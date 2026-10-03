import api from "../../shared/api/axios";

export const login = async (credentials) => {

    const response = await api.post(
        "/auth/login",
        credentials,
        {
            "headers": {
                "X-API-KEY": "FREE-678"
            }
        }
    )

    return response.data
} 

export const register = async (data) => {

    const response = await api.post(
        "auth/register",
        data
    )

    return response.data
}

export const logoutUser = async(refreshToken) => {

    return api.post(
        "/auth/logout",
        { refreshToken }
    );
};
