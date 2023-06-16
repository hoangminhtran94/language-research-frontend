import { Outlet } from "react-router";
import Navbar from "../components/NavBar";

const Layout = () => {
  return (
    <main className="flex flex-col gap-3">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
