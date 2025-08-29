import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("Auth context is being used out of its scope.");

  return context;
}

export { useAuth };
