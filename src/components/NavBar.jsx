import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className=" bg-black text-white">
      <nav className=" container  mx-auto flex gap-3 p-4">
        <NavLink className="hover:scale-105 transition-all" to={"/"}>
          Home page
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
