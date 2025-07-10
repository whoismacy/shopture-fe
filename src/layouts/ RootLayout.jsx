import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

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
