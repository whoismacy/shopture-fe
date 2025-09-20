import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { initialSort, searchQuery } from "../../store/slices/dataSlice";
import { LuX } from "react-icons/lu";
import Button from "../../components/ui/Button";

export default function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

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
          className="w-2xl rounded-full border-1 border-black px-4 py-2 text-base focus:ring-1 focus:ring-stone-300 focus:outline-none"
        />
        <Button type="absolute" onClick={clearSearch}>
          <LuX className="text-xs font-bold" />
        </Button>
      </div>
    </div>
  );
}
