import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../App.css";
import SearchBox from "../components/SearchBox";

/**
 * Layout component provides a basic layout structure for the application.
 * @author Minh Hoang Tran - 041016957
 * @component
 * @returns {JSX.Element} The rendered Layout component.
 */
const Layout = () => {
  return (
    <div className="flex flex-col gap-3">
      <Navbar />
      <main className="container mx-auto flex flex-col gap-3">
        <div className="flex gap-3 w-full">
          <Link
            className="rounded border-green-600 text-green-600 border p-4 hover:scale-105 transition-all"
            to="/new-record"
          >
            New record
          </Link>
          <Link
            className="rounded border-indigo-300 text-indigo-200 border p-4 hover:scale-105 transition-all"
            to="/"
          >
            Reload
          </Link>
          <SearchBox />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
