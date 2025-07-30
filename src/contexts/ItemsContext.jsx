import { createContext, useState } from "react";
import { useGetData } from "../hooks/useGetData";

const ItemContext = createContext();

function ItemProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: body, error, loading } = useGetData();
  const searchedData =
    searchQuery.length > 0
      ? body.filter((item) =>
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : body;

  const resultsLength = searchedData.length;

  return (
    <ItemContext.Provider
      value={{
        body: searchedData,
        error,
        loading,
        searchQuery,
        setSearchQuery,
        resultsLength,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export { ItemProvider, ItemContext };
