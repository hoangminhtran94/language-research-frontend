import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../App.css";
const Layout = () => {
  return (
    <div className="flex flex-col gap-3">
      <Navbar />
      <main className="container mx-auto flex flex-col gap-3">
        <div className="flex gap-3">
          <Link
            className="rounded border-green-600 text-green-600 border p-4 hover:scale-105 transition-all"
            to="/new-record"
          >
            New Report
          </Link>
          <Link
            className="rounded border-yellow-500 text-yellow-500 border p-4 hover:scale-105 transition-all"
            to="/view-new-report"
          >
            View new reports
          </Link>
          <Link
            className="rounded border-indigo-300 text-indigo-200 border p-4 hover:scale-105 transition-all"
            to="/"
          >
            Reload
          </Link>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
