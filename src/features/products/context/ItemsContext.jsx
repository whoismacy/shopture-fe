import { createContext, useEffect, useState } from "react";
import { useGetData } from "../../../hooks/useGetData";

const ItemContext = createContext();

function ItemProvider({ children }) {
  const { data: body, error, loading } = useGetData();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(
    function () {
      if (body) setData(body);
    },
    [body]
  );

  const searchedData =
    searchQuery.length > 0 && data?.length > 0
      ? data.filter((item) =>
          `${item.title} ${item.description} ${item.category}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : data || [];

  const resultsLength = searchedData?.length || 0;

  return (
    <ItemContext.Provider
      value={{
        error,
        loading,
        searchQuery,
        searchedData,
        resultsLength,
        setData,
        setSearchQuery,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export { ItemProvider, ItemContext };
