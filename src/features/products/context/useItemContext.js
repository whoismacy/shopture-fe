import { useContext } from "react";
import { ItemContext } from "./ItemsContext";

export function useItemContext() {
  const context = useContext(ItemContext);

  if (context === undefined)
    throw new Error("ItemContext is being used outside of its Provider");

  return context;
}
