import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

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
