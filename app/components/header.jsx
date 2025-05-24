import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDropdown = (id) => {
    setDropdownOpen((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`bg-gray-800 text-white fixed w-full top-0 z-50 transition-transform duration-300 ${headerHidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="w-10 h-10 mr-2 rounded"
            />
            <h1 className="text-xl font-bold">CCF-NIFES</h1>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none z-50"
          >
            {!menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </button>
          <nav
            className={`fixed inset-y-0 right-0 transform ${menuOpen ? "translate-x-0" : "translate-x-full"
              } md:relative md:translate-x-0 bg-gray-800 md:bg-transparent w-64 md:w-auto h-full md:h-auto overflow-y-auto md:overflow-visible transition-transform duration-300 ease-in-out md:transition-none`}
          >
            <ul className="pt-16 md:pt-0 px-4 md:px-0 md:flex space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <Link
                  to="/"
                  className="block py-2 md:py-0 hover:text-gray-300 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 md:py-0 hover:text-gray-300 transition duration-200"
                >
                  About
                </Link>
              </li>
              <li className="relative">
                <button onClick={() => toggleDropdown("products")} className="block py-2 md:py-0 hover:text-gray-300 transition duration-200 flex items-center justify-between w-full" >
                  Units
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" ></path> </svg>
                </button>
                {dropdownOpen === "products" && (
                  <ul className="mt-2 space-y-2 bg-gray-700 md:bg-white text-white md:text-gray-800 rounded shadow-lg md:absolute md:left-0 w-full md:w-48">
                    <li>
                      <Link
                        to="/electronics"
                        className="block px-4 py-2 hover:bg-gray-600 md:hover:bg-gray-100 transition duration-200"
                      >
                        Electronics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/clothing"
                        className="block px-4 py-2 hover:bg-gray-600 md:hover:bg-gray-100 transition duration-200"
                      >
                        Clothing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/home-garden"
                        className="block px-4 py-2 hover:bg-gray-600 md:hover:bg-gray-100 transition duration-200"
                      >
                        Home & Garden
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sports-outdoors"
                        className="block px-4 py-2 hover:bg-gray-600 md:hover:bg-gray-100 transition duration-200"
                      >
                        Sports & Outdoors
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
             
              <li>
                <Link
                  to="/contact"
                  className="block py-2 md:py-0 hover:text-gray-300 transition duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className="hover:text-gray-300 bg-indigo-950 " onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)} > Our Blogs </button>
              </li>
              <li>
                <button className="hover:text-gray-300" onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)} > Testimonies</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>


    </header>
  );
}
