import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  // Drawer state only matters below `md`. Start closed so phones
  // don't load with the menu already covering the page.
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-dvh overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-gray-900 dark:text-slate-100">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Offset matches the sidebar: none on phones, 80px rail on tablets, 256px on desktops */}
      <div className="flex min-w-0 flex-1 flex-col md:ml-20 lg:ml-64">
        <Navbar setOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain bg-slate-100 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] dark:bg-gray-950 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
