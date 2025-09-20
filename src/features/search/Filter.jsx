import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  initialSort,
  alphabeticalSort,
  categorySort,
  priceSort,
  ratingSort,
} from "../../store/slices/dataSlice";

export default function Filter() {
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
      <div className="flex h-12 w-auto items-center rounded-3xl bg-stone-50 shadow-md hover:bg-stone-100">
        <select
          name="sort"
          value={sortValue}
          onChange={(event) => handleChange(event.target.value)}
          className="rounded-3xl border-none py-4 text-center text-lg font-semibold transition-all duration-320 ease-in-out"
        >
          <option value="">Sort Items</option>
          <option value="category">Sort by Category</option>
          <option value="alphabetical">Sort Alphabetically</option>
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>
    </>
  );
}
