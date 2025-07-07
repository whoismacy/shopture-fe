import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="authLayoutContainer">
      <Outlet />
    </div>
  );
}
