import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 right-0 left-0 z-50 bg-white p-3 flex justify-between items-center h-16 rounded-sm border-b border-gray-500 border-opacity-50">
        <div className="logo text-2xl font-extrabold">Travel</div>
        <div className="hidden md:flex menu gap-2 font-bold px-14">
          <Link className="hover:bg-gray-400 px-3 py-[5px]" to="/">
            Home
          </Link>
          <Link className="hover:bg-gray-400 px-3 py-[5px]" to="/gallery">
            Gallery
          </Link>
          <Link className="hover:bg-gray-400 px-3 py-[5px]" to="/contact">
            Contact
          </Link>
          <Link className="hover:bg-gray-400 px-3 py-[5px]" to="/about">
            About
          </Link>
          <button className="bg-gray-400 px-3">Login</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute right-0 top-16 md:hidden bg-white rounded-sm shadow-lg p-5 w-full">
            <div className="flex flex-col p-4  items-center gap-3">
              <Link className="hover:bg-gray-400 px-3 py-[5px]" to="/">
                Home
              </Link>
              <Link className="hover:bg-gray-400 px-3 py-[5px]" to="/gallery">
                Gallery
              </Link>
              <Link className="hover:bg-gray-400 px-3 py-[5px]" to="/contact">
                Contact
              </Link>
              <Link className="hover:bg-gray-400 px-3 py-[5px]" to="/about">
                About
              </Link>
              <button className="bg-gray-400 px-3">Login</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
