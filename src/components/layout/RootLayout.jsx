import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function RootLayout() {
  return (
    <div className="RootLayout">
      <Header />
      <div className="Outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
