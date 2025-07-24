import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 fixed w-full bg-white shadow-md z-50">
      <h1 className="text-2xl font-bold tracking-wide">mirror</h1>
      <nav className="space-x-6 text-sm font-medium tracking-wide">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
