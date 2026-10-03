import { Outlet } from "react-router-dom";


const AuthLayout = () => {


    return (

        <main
        className="
        min-h-screen

        flex

        items-center

        justify-center

        bg-linear-to-br

        from-slate-100

        via-blue-50

        to-slate-200

        px-4

        py-8

        sm:px-6

        lg:px-8
        "
        >




            <div
            className="
            w-full

            max-w-md

            sm:max-w-lg

            "
            >





                {/* BRANDING */}


                <div
                className="
                text-center

                mb-6

                sm:mb-8
                "
                >


                    <h1
                    className="
                    text-3xl

                    sm:text-4xl

                    font-bold

                    text-slate-900
                    "
                    >

                        StockFlow

                    </h1>


                    <p
                    className="
                    mt-2

                    text-sm

                    sm:text-base

                    text-slate-500
                    "
                    >

                        Smart Inventory & Sales Management

                    </p>


                </div>









                {/* AUTH CARD */}


                <section

                className="
                
                bg-white
                
                rounded-2xl
                
                shadow-xl
                
                border
                
                border-slate-200
                
                p-5
                
                sm:p-8
                
                "

                >


                    <Outlet/>


                </section>






                {/* FOOTER */}


                <p

                className="
                
                text-center
                
                text-xs
                
                sm:text-sm
                
                text-slate-500
                
                mt-6
                
                "

                >

                    © {new Date().getFullYear()} StockFlow.
                    All rights reserved.

                </p>



            </div>



        </main>


    )

}


export default AuthLayout;