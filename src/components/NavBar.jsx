import { NavLink } from "react-router-dom";
/**
 * Renders the Navbar component.
 * @author Minh Hoang Tran - 041016957
 * @component
 */
const Navbar = () => {
  return (
    <header className=" bg-black text-white">
      <nav className=" container  mx-auto flex gap-3 p-4">
        <NavLink className="hover:scale-105 transition-all" to={"/"}>
          Home page
        </NavLink>
        <h2 className="text-center flex-1">
          Developed by Minh Hoang Tran - 041016957
        </h2>
      </nav>
    </header>
  );
};

export default Navbar;
