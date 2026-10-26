import { useEffect } from "react";
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

/**
 * Breakpoints
 *  < md  (phones)   : slide-in drawer, full labels, backdrop
 *  md–lg (tablets)  : 80px icon rail, tooltips on hover/focus
 *  lg+   (desktops) : 256px expanded sidebar with labels
 */
const Sidebar = ({ open, setOpen }) => {
  const totalItems = useCartStore((state) => state.totalItems ?? 0);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Products", path: "/products", icon: <MdInventory2 /> },
    { name: "Orders", path: "/orders", icon: <FaBox /> },
    { name: "Cart", path: "/cart", icon: <FaShoppingCart />, badge: totalItems },
    { name: "Stock Movement", path: "/stock-movements", icon: <FaExchangeAlt /> },
  ];

  // Close the drawer with Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && setOpen?.(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Reset the drawer when the screen grows past the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen?.(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [setOpen]);

  return (
    <>
      {/* Backdrop (mobile only) */}
      <div
        onClick={() => setOpen?.(false)}
        aria-hidden="true"
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px]
          transition-opacity duration-300 md:hidden
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      <aside
        aria-label="Main navigation"
        className={`
          fixed inset-y-0 left-0 z-50 h-dvh
          w-[min(18rem,85vw)] md:w-20 lg:w-64
          bg-white dark:bg-gray-900
          border-r border-slate-200 dark:border-slate-700
          shadow-2xl md:shadow-none
          transition-[transform,visibility] duration-300 ease-out
          md:translate-x-0 md:visible
          ${open ? "translate-x-0" : "-translate-x-full invisible"}
        `}
      >
        <div className="flex h-full flex-col pb-[env(safe-area-inset-bottom)]">
          {/* Drawer header (mobile only) */}
          <div className="flex h-16 shrink-0 items-center justify-between px-4 md:hidden">
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              StockFlow
            </span>
            <button
              onClick={() => setOpen?.(false)}
              className="
                flex h-10 w-10 items-center justify-center rounded-lg
                text-slate-700 dark:text-slate-300
                [@media(hover:hover)]:hover:bg-slate-100
                dark:[@media(hover:hover)]:hover:bg-gray-800
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
              "
              aria-label="Close sidebar"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav
            className="
              flex flex-1 flex-col gap-2 px-3 py-3 md:py-5
              max-md:overflow-y-auto overscroll-contain
            "
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen?.(false)}
                aria-label={item.name}
                className={({ isActive }) =>
                  `
                  group relative flex h-12 items-center gap-4 rounded-xl px-4
                  md:justify-center md:px-0
                  lg:justify-start lg:px-4
                  transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : `text-slate-600 dark:text-slate-300
                         [@media(hover:hover)]:hover:bg-slate-100
                         dark:[@media(hover:hover)]:hover:bg-gray-800`
                  }
                `
                }
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-lg">
                  {item.icon}
                </span>

                {/* Label: drawer + desktop. Hidden on the tablet rail. */}
                <span className="truncate font-medium md:hidden lg:inline">
                  {item.name}
                </span>

                {/* Tooltip: tablet rail only */}
                <span
                  role="tooltip"
                  className="
                    pointer-events-none absolute left-full z-50 ml-3
                    hidden md:block lg:hidden
                    whitespace-nowrap rounded-lg px-3 py-1 text-xs
                    bg-gray-900 text-white dark:bg-white dark:text-gray-900
                    opacity-0 shadow-lg transition-opacity
                    group-hover:opacity-100 group-focus-visible:opacity-100
                  "
                >
                  {item.name}
                </span>

                {/* Badge: inline in drawer/desktop, corner dot on the rail */}
                {item.badge > 0 && (
                  <span
                    className="
                      ml-auto flex h-5 min-w-5 items-center justify-center
                      rounded-full bg-red-500 px-1 text-xs font-semibold text-white
                      md:absolute md:right-1 md:top-1 md:ml-0
                      lg:static lg:ml-auto
                    "
                  >
                    {item.badge > 99 ? "99+" : item.badge}
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
