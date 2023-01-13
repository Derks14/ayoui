import { Outlet } from "react-router-dom";
import { Header } from "@/sections/header/header.jsx";
import { Footer } from "@/sections/footer/footer.jsx";
import { Sidebar } from "@/sections/sidebar/sidebar.jsx";
import { Nav } from "@/sections/nav/nav.jsx";

export const DashboardLayout = () => {
  return (
    <div>
      <section className="h-screen flex flex-auto divide-x-[1px] divide-gray-600">
        <Sidebar />
        <main className="flex flex-col flex-auto justify-between p-4">
          <Header />
          <Nav />
          <section className="grow overflow-auto">
            <Outlet />
          </section>
          <Footer />
        </main>
      </section>
    </div>
  );
};
