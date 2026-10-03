import axios from "axios";


const url = import.meta.env.VITE_API_URL;


const api = axios.create({

    baseURL: url,

    headers:{
        "Content-Type":"application/json"
    }

});


// separate axios instance for refresh
const refreshApi = axios.create({

    baseURL:url,

    headers:{
        "Content-Type":"application/json"
    }

});



// ===============================
// REQUEST INTERCEPTOR
// ===============================

api.interceptors.request.use(

    (config)=>{


        const token =
            localStorage.getItem("accessToken");


        if(token){

            config.headers.Authorization =
                `Bearer ${token}`;

        }


        return config;

    },


    error=>Promise.reject(error)

);





// ===============================
// RESPONSE INTERCEPTOR
// ===============================


let isRefreshing = false;


let refreshSubscribers = [];



const subscribeTokenRefresh = (callback)=>{

    refreshSubscribers.push(callback);

};



const onRefreshed = (token)=>{


    refreshSubscribers.forEach(
        callback=>callback(token)
    );


    refreshSubscribers=[];

};





api.interceptors.response.use(


    response=>response,


    async(error)=>{


        const originalRequest =
            error.config;



        if(!originalRequest){

            return Promise.reject(error);

        }



        const status =
            error.response?.status;



        // ignore refresh endpoint
        if(
            originalRequest.url.includes("/auth/refresh")
        ){

            return Promise.reject(error);

        }



        if(
            (status === 401 || status === 403)
            &&
            !originalRequest._retry
        ){


            originalRequest._retry=true;



            if(isRefreshing){


                return new Promise((resolve)=>{


                    subscribeTokenRefresh(
                        
                        (token)=>{


                            originalRequest.headers.Authorization =
                                `Bearer ${token}`;


                            resolve(
                                api(originalRequest)
                            );

                        }

                    );


                });


            }





            isRefreshing=true;



            try{


                const refreshToken =
                    localStorage.getItem(
                        "refreshToken"
                    );



                if(!refreshToken){

                    throw new Error(
                        "No refresh token"
                    );

                }




                const response =
                    await refreshApi.post(

                        "/auth/refresh",

                        {
                            refreshToken
                        }

                    );



                const newAccessToken =
                    response.data.accessToken;



                const newRefreshToken =
                    response.data.refreshToken;




                localStorage.setItem(
                    "accessToken",
                    newAccessToken
                );



                localStorage.setItem(
                    "refreshToken",
                    newRefreshToken
                );



                isRefreshing=false;



                onRefreshed(
                    newAccessToken
                );



                originalRequest.headers.Authorization =
                    `Bearer ${newAccessToken}`;



                return api(originalRequest);



            }
            catch(refreshError){


                isRefreshing=false;


                refreshSubscribers=[];


                localStorage.removeItem(
                    "accessToken"
                );


                localStorage.removeItem(
                    "refreshToken"
                );


                window.location.href="/login";


                return Promise.reject(
                    refreshError
                );

            }

        }



        return Promise.reject(error);

    }

);



export default api;