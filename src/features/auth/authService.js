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


// Add these to your existing authService.js.
// Adjust `api` and the URLs to match how your `login` function is written.

// Step 1: user enters email -> backend emails a link containing a token
export const forgotPassword = async ({ email }) => {
    const { data } = await api.post("/auth/forgot-password", { email });
    return data;
};

// Step 2: user opens the link and submits a new password
export const resetPassword = async ({ token, newPassword }) => {
    const { data } = await api.post("/auth/reset-password", {
        token,
        newPassword,
    });
    return data;
};
