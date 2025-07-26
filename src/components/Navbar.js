import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-black text-white px-6 py-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-widest text-white">
          OM
        </h1>

        {/* Navigation */}
        <nav className="space-x-6 text-sm md:text-base font-medium tracking-wide">
          <Link
            to="/"
            className="text-white hover:text-pink-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-pink-400 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-white hover:text-pink-400 transition duration-200"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-pink-400 transition duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

