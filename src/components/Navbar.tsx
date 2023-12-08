import { useState, useRef, useEffect } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const headerRef = useRef<HTMLInputElement>(null!);

  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunction();

    return () => window.removeEventListener("scroll", stickyHeaderFunction);
  });
  return (
    <div className="mx-auto w-full bg-blue-100" ref={headerRef}>
      <nav className="w-full h-[70px] mx-auto flex justify-between items-center py-3 px-2 max-w-[1340px]">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto px-4">
          <h1 className="text-2xl lg:text-3xl">
            Nav <span className="font-bold">Tut</span>
          </h1>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden flex"
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>

        {/* navigation */}
        <div className="hidden md:flex">
          <ul className="flex space-x-10 items-center">
            <li className="text-gray-600 font-[500] cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="text-gray-600 font-[500] cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="text-gray-600 font-[500] cursor-pointer">
              <a href="#">Services</a>
            </li>
            <li className="text-gray-600 font-[500] cursor-pointer">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* login/logout button */}
        <button className="hidden md:inline-block bg-black text-white px-5 py-2">
          Login
        </button>

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300 ease-in "></div>
        ) : (
          ""
        )}

        {/* side drawer menu */}
        <div
          className={`fixed top-0 w-[60%] h-screen bg-white z-10 duration-500 ease-in ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="top-4 right-4 absolute cursor-pointer
  "
          />
          <nav className="mt-8">
            <ul className="flex flex-col p-4 text-gray-900 font-[600] text-center gap-8">
              <li className="text-gray-800 hover:bg-blue-300 hover:text-white font-[500] cursor-pointer">
                <a href="#">Home</a>
              </li>
              <li className="text-gray-800 hover:bg-blue-300 hover:text-white font-[500] cursor-pointer">
                <a href="#">About</a>
              </li>
              <li className="text-gray-800 hover:bg-blue-300 hover:text-white font-[500] cursor-pointer">
                <a href="#">Services</a>
              </li>
              <li className="text-gray-800 hover:bg-blue-300 hover:text-white font-[500] cursor-pointer">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
