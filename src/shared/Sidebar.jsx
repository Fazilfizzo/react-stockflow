import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBox,
  FaShoppingCart,
  FaTimes,
  FaExchangeAlt,
} from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import useCartStore from "./store/cartStore";

const Sidebar = ({ open, setOpen }) => {
  const totalItems = useCartStore((state) => state.totalItems ?? 0);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Products", path: "/products", icon: <MdInventory2 /> },
    { name: "Orders", path: "/orders", icon: <FaBox /> },
    { name: "Cart", path: "/cart", icon: <FaShoppingCart />, badge: totalItems },
    { name: "Stock Movement", path: "/stock-movements", icon: <FaExchangeAlt /> },
  ];

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen?.(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen
          w-64 md:w-20
          bg-white dark:bg-gray-900
          border-r border-slate-200 dark:border-gray-700
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex h-full flex-col py-5">
          <button
            onClick={() => setOpen?.(false)}
            className="md:hidden self-end mr-5 mb-5 p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-800"
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>

          <nav className="flex flex-col gap-3 px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen?.(false)}
                className={({ isActive }) =>
                  `group relative flex items-center gap-4 h-12 rounded-xl transition-colors md:justify-center ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                <span className="text-lg md:ml-0">{item.icon}</span>

                <span className="font-medium md:hidden">{item.name}</span>

                <span
                  className="
                    hidden md:block
                    absolute left-16
                    px-3 py-1 rounded-lg
                    bg-gray-900 dark:bg-white
                    text-white dark:text-gray-900
                    text-xs whitespace-nowrap
                    opacity-0 group-hover:opacity-100
                    pointer-events-none
                  "
                >
                  {item.name}
                </span>

                {item.badge > 0 && (
                  <span
                    className="
                      absolute top-1 right-2 md:right-1
                      w-5 h-5 rounded-full
                      flex items-center justify-center
                      bg-red-500 text-white text-xs
                    "
                  >
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;