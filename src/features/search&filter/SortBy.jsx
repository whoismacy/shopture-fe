import Search from "./Search";
import { useItemContext } from "../../contexts/useItemContext";
import { useState } from "react";

export default function SortBy() {
  const { searchedData, setData } = useItemContext();
  const [sortStat, setSortStat] = useState("");

  function handleChange(state) {
    setSortStat(state);

    switch (state) {
      case "alphabetical":
        AlphabeticalSort();
        break;
      case "price":
        PriceSort();
        break;
      case "rating":
        RatingSort();
        break;
      case "category":
        CategorySort();
        break;
      default:
        NormalSort();
    }
  }

  function NormalSort() {
    const sorted = [...searchedData];
    setData(sorted);
  }

  function AlphabeticalSort() {
    const sorted = [...searchedData].sort((a, b) =>
      a.title.localeCompare(b.title, { ignorePunctuation: true })
    );
    setData(sorted);
  }

  function CategorySort() {
    const sorted = [...searchedData].sort((a, b) =>
      a.category.localeCompare(b.category, { ignorePunctuation: true })
    );
    setData(sorted);
  }

  function PriceSort() {
    const sorted = [...searchedData].sort((a, b) => a.price - b.price);
    setData(sorted);
  }

  function RatingSort() {
    const sorted = [...searchedData].sort(
      (a, b) => a.rating.count - b.rating.count
    );
    const sortedRating = sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    setData(sortedRating);
  }

  return (
    <>
      <div className="sortContainer">
        <select
          name="sort"
          value={sortStat}
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
