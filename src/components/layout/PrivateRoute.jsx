import { Navigate, useLocation } from "react-router-dom";
export default function PrivateRoute({ children, allowed }) {
  const location = useLocation();
  if (!allowed) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <div>{children}</div>;
}
