import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialSort, searchQuery } from "../../store/slices/dataSlice";
import styles from "./Search.module.css";

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
    dispatch(searchQuery(""));
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search products by name, category & description"
      />
      <button className="btn" onClick={clearSearch}>
        Clear
      </button>
      <p>
        <span>{resultsLength}</span> item{resultsLength !== 1 ? "s" : ""} found.
      </p>
    </div>
  );
}
