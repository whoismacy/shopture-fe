import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuthContext";
import FullLoader from "./FullPageLoader";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/auth/login");
    },
    [isAuthenticated, navigate]
  );

  if (!isAuthenticated) {
    return <FullLoader />;
  }

  return children;
}
