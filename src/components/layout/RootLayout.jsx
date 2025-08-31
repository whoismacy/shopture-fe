import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function RootLayout() {
  return (
    <section className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="mx-auto max-w-3xl">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
