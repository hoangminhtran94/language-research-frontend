import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
import "../App.css";
const Layout = () => {
  return (
    <div className="flex flex-col gap-3">
      <Navbar />
      <main className="container mx-auto flex flex-col gap-3">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
