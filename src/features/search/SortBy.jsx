import Search from "./Search";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  initialSort,
  alphabeticalSort,
  categorySort,
  priceSort,
  ratingSort,
} from "../../store/slices/dataSlice";

export default function SortBy() {
  const [sortValue, setSortValue] = useState("");
  const dispatch = useDispatch();

  function handleChange(state) {
    setSortValue(state);
    switch (state) {
      case "alphabetical":
        dispatch(alphabeticalSort());
        break;
      case "price":
        dispatch(priceSort());
        break;
      case "rating":
        dispatch(ratingSort());
        break;
      case "category":
        dispatch(categorySort());
        break;
      default:
        dispatch(initialSort());
    }
  }

  return (
    <>
      <div className="sortContainer">
        <select
          name="sort"
          value={sortValue}
          onChange={(event) => handleChange(event.target.value)}
        >
          <option value="">Sort Items</option>
          <option value="category">Sort by Category</option>
          <option value="alphabetical">Sort by Alphabetical Order</option>
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
        <Search />
      </div>
    </>
  );
}
