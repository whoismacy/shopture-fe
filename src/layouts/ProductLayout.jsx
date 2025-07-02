import { Outlet } from "react-router-dom";

export default function ProductLayout() {
  return (
    <div className="itemContainer">
      <h2>PRODUCTS</h2>
      <Outlet />
    </div>
  );
}
