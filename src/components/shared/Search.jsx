import { useItemContext } from "../../contexts/useItemContext";
import styles from "./Search.module.css";

export default function Search() {
  const { searchQuery, setSearchQuery, resultsLength } = useItemContext();
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search"
      />
      <button className="btn" onClick={() => setSearchQuery("")}>
        Clear Search
      </button>
      <p>
        <span>{resultsLength}</span> item{resultsLength > 1 ? "s" : ""} found.
      </p>
    </div>
  );
}
