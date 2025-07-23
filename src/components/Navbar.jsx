import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
    <Link to="/" className="text-xl font-bold">[YourName]</Link>
    <div className="space-x-4 text-sm md:text-base">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
