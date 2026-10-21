import { Search, RotateCcw } from "lucide-react";

const MovementFilters = ({ filters, setFilters }) => {
  const resetFilters = () => {
    setFilters({
      search: "",
      type: "ALL",
    });
  };

  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-600
        rounded-2xl
        shadow-sm
        p-4
        sm:p-5
        transition-colors
      "
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search
            size={18}
            className="
              absolute left-4 top-1/2 -translate-y-1/2
              text-slate-400
              dark:text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search product..."
            value={filters.search}
            onChange={(e) =>
              setFilters({
                ...filters,
                search: e.target.value,
              })
            }
            className="
              w-full rounded-xl
              border border-slate-300
              bg-white
              py-3 pl-11 pr-4 text-sm
              text-slate-800
              placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition-colors
              dark:bg-slate-800
              dark:border-slate-600
              dark:text-white
              dark:placeholder:text-slate-400
            "
          />
        </div>

        <select
          value={filters.type}
          onChange={(e) =>
            setFilters({
              ...filters,
              type: e.target.value,
            })
          }
          className="
            w-full lg:w-52
            rounded-xl
            border border-slate-300
            bg-white px-4 py-3 text-sm
            text-slate-800
            outline-none
            focus:ring-2 focus:ring-blue-500
            transition-colors
            dark:bg-slate-800
            dark:border-slate-600
            dark:text-white
          "
        >
          <option value="ALL">All Movements</option>
          <option value="IN">Stock In</option>
          <option value="OUT">Stock Out</option>
        </select>

        <button
          onClick={resetFilters}
          className="
            flex items-center justify-center gap-2
            w-full lg:w-auto
            px-4 py-3
            rounded-xl
            border border-slate-300
            bg-white text-slate-700
            hover:bg-slate-100
            transition-colors
            dark:bg-slate-800
            dark:border-slate-600
            dark:text-gray-200
            dark:hover:bg-slate-700
            dark:hover:border-blue-500
          "
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </div>
    </div>
  );
};

export default MovementFilters;