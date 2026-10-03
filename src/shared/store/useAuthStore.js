import { create } from "zustand";

const useAuthStore = create((set)=>({
    user:null,

    logout:() => {
        localStorage.removeItem("accessToken")

        localStorage.removeItem("refreshToken")

        set({
            user:null
        })
    }
}))

export default useAuthStore;