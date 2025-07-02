import { Outlet } from "react-router-dom";

export default function ProductLayout() {
  return (
    <div className="itemContainer">
      <Outlet />
    </div>
  );
}
