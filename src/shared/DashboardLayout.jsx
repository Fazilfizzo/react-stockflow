import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const DashboardLayout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);


    return (

        <div
            className="
            flex

            h-screen
            overflow-hidden

            bg-slate-50
            dark:bg-gray-900

            text-slate-900
            dark:text-slate-100

            transition-colors
            duration-300
            "
        >


            <Sidebar

                open={sidebarOpen}

                setOpen={setSidebarOpen}

            />





            <div

                className="
                flex
                flex-1
                flex-col
                min-w-0
                transition-all
                duration-300
                md:ml-20
                "

            >



                <Navbar

                    setOpen={setSidebarOpen}

                />






                <main

                    className="
                    flex-1

                    overflow-y-auto
                    overflow-x-hidden
                    p-4
                    sm:p-6
                    lg:p-8

                    bg-slate-100
                    dark:bg-gray-950
                    "

                >

                  <div className="mx-auto w-full max-w-7xl">
                    <Outlet/>
                  </div>
                    
                </main>

            </div>

        </div>


    );

};


export default DashboardLayout;