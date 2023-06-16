import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-black text-white">
      <nav className="flex gap-3 p-4">
        <NavLink className="hover:scale-105 transition-all" to={"/"}>
          View all
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
