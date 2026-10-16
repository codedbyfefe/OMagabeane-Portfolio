
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linksLeft = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const linksRight = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const allLinks = [...linksLeft, ...linksRight];

  const getLinkClass = (path) =>
    `relative whitespace-nowrap text-sm sm:text-base lg:text-xl tracking-wide
     transition-all duration-300 group
     ${
       location.pathname === path
         ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
         : "text-gray-200 hover:text-white"
     }`;

  const renderLink = (link) => (
    <Link
      key={link.name}
      to={link.path}
      className={getLinkClass(link.path)}
    >
      {link.name}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] rounded-full
          bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
          transition-all duration-300
          ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50
      bg-black/60 backdrop-blur-md border-b border-white/10
      shadow-md transition-all duration-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        py-3 sm:py-4 lg:py-5 font-poppins">

        {/* MOBILE LAYOUT */}
        <div className="flex flex-col items-center gap-3 md:hidden">
          <Link to="/" aria-label="Go to homepage">
            <img
              src="/images/OM-Logo(Canva Design).png"
              alt="Ofentse's logo"
              className="h-8 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]
                hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex w-full items-center justify-center gap-x-5 sm:gap-x-9"
          >
            {allLinks.map(renderLink)}
          </nav>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:flex items-center justify-center relative">
          <nav
            aria-label="Left navigation"
            className="absolute left-0 flex items-center gap-6 lg:gap-12"
          >
            {linksLeft.map(renderLink)}
          </nav>

          <Link to="/" aria-label="Go to homepage">
            <img
              src="/images/OM-Logo(Canva Design).png"
              alt="Ofentse's logo"
              className="h-9 lg:h-10 w-auto
                drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]
                hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <nav
            aria-label="Right navigation"
            className="absolute right-0 flex items-center gap-6 lg:gap-12"
          >
            {linksRight.map(renderLink)}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
