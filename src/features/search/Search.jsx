import { useItemContext } from "../products/context/useItemContext";
import { showInfoToast } from "../../utils/toast";
import styles from "./Search.module.css";

export default function Search() {
  const { searchQuery, setSearchQuery, resultsLength } = useItemContext();
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search Products...."
      />
      <button
        className="btn"
        onClick={() => {
          if (searchQuery.length > 0) {
            showInfoToast("Cleared Search Input");
          }
          setSearchQuery("");
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
