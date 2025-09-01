import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialSort, searchQuery } from "../../store/slices/dataSlice";

export default function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const resultsLength = useSelector((state) => state.data.filteredState.length);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim().length === 0) {
        dispatch(initialSort());
      } else if (query.trim().length >= 1) {
        dispatch(searchQuery(query.trim()));
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [query, dispatch]);

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  function clearSearch() {
    setQuery("");
    dispatch(initialSort());
  }

  return (
    <div className="flex items-center gap-8 px-4 py-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="px-6 py-2 text-3xl border-b w-xl"
        />
        <button className="absolute text-white bg-red-400 py-2 px-4 rounded-full font-bold text-1xl right-4 top-3 focus:outline-none " onClick={clearSearch} >
          X
        </button>
      </div>
      <p className="text-2xl italic">
        <span className="text-orange-400 font-semibold">{resultsLength}</span>{" "}
        item
        {resultsLength !== 1 ? "s" : ""} found
      </p>
    </div>
  );
}
