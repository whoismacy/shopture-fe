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
      <div className="flex justify-around py-4 gap-12 bg-white shadow-md">
        <select
          name="sort"
          value={sortValue}
          onChange={(event) => handleChange(event.target.value)}
          className="font-semibold text-2xl px-6 py-4 text-center border-none transition-all duration-320 ease-in-out hover:bg-yellow-100"
        >
          <option value="">Sort Items</option>
          <option value="category">Sort by Category</option>
          <option value="alphabetical">Sort by Alphabetical Order</option>
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>
    </>
  );
}
