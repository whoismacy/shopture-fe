import { createContext } from "react";
import { useGetData } from "../hooks/useGetData";

const ItemContext = createContext();

function ItemProvider({ children }) {
  const { data: body, error, loading } = useGetData();
  return (
    <ItemContext.Provider value={{ body, error, loading }}>
      {children}
    </ItemContext.Provider>
  );
}

export { ItemProvider, ItemContext };
