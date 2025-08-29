import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/context/useAuthContext";
import FullLoader from "../../ui/FullPageLoader";

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
