import { showInfoToast } from "../../utils/toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "../../store/slices/dataSlice";
import styles from "./Search.module.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const resultsLength = useSelector((state) => state.data.filteredState.length);

  useEffect(() => {
    if (query.length > 2) {
      dispatch(searchQuery(query));
    }
  }, [query, dispatch]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Products...."
      />
      <button
        className="btn"
        onClick={() => {
          if (query.length > 0) {
            showInfoToast("Cleared Search Input");
          }
          setQuery("");
        }}
      >
        Clear
      </button>
      <p>
        <span>{resultsLength}</span> item{resultsLength !== 1 ? "s" : ""} found.
      </p>
    </div>
  );
}
