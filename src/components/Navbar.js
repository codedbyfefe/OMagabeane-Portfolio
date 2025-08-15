import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-black px-8 py-5 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative font-poppins">
        {/* Left Nav */}
        <nav className="flex space-x-6 absolute left-12">
          <Link
            to="/"
            className="text-white text-lg tracking-wide relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="text-white text-lg tracking-wide relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Center Logo */}
        <div className="flex justify-center">
          <img
            src="/images/OM-Logo(Canva Design).png"
            alt="Logo"
            className="h-9 w-auto"
          />
        </div>

        {/* Right Nav */}
        <nav className="flex space-x-6 absolute right-12">
          <Link
            to="/portfolio"
            className="text-white text-lg tracking-wide relative group"
          >
            Portfolio
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg tracking-wide relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
