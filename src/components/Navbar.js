import { Link, useLocation } from "react-router-dom";

function Navbar() {
  // Get the current URL path to highlight the active page
  const location = useLocation();

  // Define links for the left and right nav sections
  const linksLeft = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const linksRight = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    // Main navbar container
    <header className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 px-8 py-5 z-50 shadow-md transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative font-poppins">
        
        {/* =========================
            LEFT NAVIGATION LINKS
        ========================== */}
        <nav className="flex space-x-8 absolute left-12">
          {linksLeft.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-lg tracking-wide transition-all duration-300 group 
                ${
                  location.pathname === link.path
                    // Active link → gradient text for premium look
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
                    // Inactive links → soft gray, turns white on hover
                    : "text-gray-200 hover:text-white"
                }`}
            >
              {link.name}
              {/* Underline effect with gradient on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-500 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* =========================
            CENTER LOGO
        ========================== */}
        <div className="flex justify-center">
          <img
            src="/images/OM-Logo(Canva Design).png"
            alt="Logo"
            className="h-10 w-auto 
                       drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] 
                       hover:scale-105 transition-transform duration-300"
          />
          {/* Subtle glow + hover scaling for premium feel */}
        </div>

        {/* =========================
            RIGHT NAVIGATION LINKS
        ========================== */}
        <nav className="flex space-x-8 absolute right-12">
          {linksRight.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-lg tracking-wide transition-all duration-300 group 
                ${
                  location.pathname === link.path
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
                    : "text-gray-200 hover:text-white"
                }`}
            >
              {link.name}
              {/* Same gradient underline animation as left nav */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-500 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
