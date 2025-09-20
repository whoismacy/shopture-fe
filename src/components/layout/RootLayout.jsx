import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function RootLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="mx-auto mt-[64px] mb-[128px] max-w-[1600px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
