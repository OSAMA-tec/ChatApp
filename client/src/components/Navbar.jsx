import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">My Chat App</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:block lg:flex lg:items-center lg:w-auto">
        <div className="text-sm">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white bg-teal-500 hover:bg-teal-700 px-4 py-2 rounded mr-4"
          >
            Home
          </Link>
          <Link
            to="/chat"
            className="block mt-4 lg:inline-block lg:mt-0 text-white bg-teal-500 hover:bg-teal-700 px-4 py-2 rounded mr-4"
          >
            Chat
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-full block flex-grow lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ damping: 300 }}
          >
            <div className="text-sm">
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white bg-teal-500 hover:bg-teal-700 px-4 py-2 rounded mr-4"
              >
                Home
              </Link>
              <Link
                to="/chat"
                className="block mt-4 lg:inline-block lg:mt-0 text-white bg-teal-500 hover:bg-teal-700 px-4 py-2 rounded mr-4"
              >
                Chat
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;