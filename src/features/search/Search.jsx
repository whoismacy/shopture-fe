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
    <div className="flex justify-center items-center gap-8">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search products by name, category & description"
        className="border py-4 px-6 text-2xl w-2xl placeholder:text-1xl placeholder:text-left focus:outline-none focus:ring focus:ring-yellow-200"
      />
      <button className="btn" onClick={clearSearch}>
        Clear
      </button>
      <p>
        <span className="text-yellow-400 font-semibold">{resultsLength}</span>{" "}
        item
        {resultsLength !== 1 ? "s" : ""} found.
      </p>
    </div>
  );
}
