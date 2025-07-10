import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-50 shadow-lg fixed w-full z-10 top-0">
      {/* Logo or Title */}
      <a
        href="#home"
        className="text-blue-900 font-semibold text-2xl mr-4"
      >
        PORTFOLIO
      </a>

      {/* Hamburger Button for Small Screens */}
      <button
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md border-2 border-blue-900 text-blue-900"
      >
        ☰
      </button>

      {/* Links */}
      <ul
        className={`absolute md:static left-0 top-16 w-full md:w-auto bg-gray-50 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out flex flex-col md:flex-row gap-4 items-center`}
      >
        {["Home", "About", "Skills","Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick} // 👈 Close on click
              className="px-4 py-2 rounded-2xl hover:bg-blue-900 hover:text-gray-50 transition border-2 border-blue-900 text-blue-900 font-semibold block"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
