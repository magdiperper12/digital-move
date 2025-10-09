"use client";

import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";

const MobileMenu: React.FC = () => {
  //   const menuVariants = {
  //     hidden: { x: "100%", opacity: 0 },
  //     visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  //     exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  //   };

  return (
    <div className="md:hidden">
      {/* Button */}
      <button
        // onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-900 text-white focus:outline-none"
      >
        <HiOutlineMenu size={28} />
      </button>

      {/* Menu */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-3/4 bg-gray-800 text-white shadow-2xl z-50 flex flex-col items-center justify-center gap-6"
          >
            <a href="#home" className="text-xl hover:text-green-400">
              Home
            </a>
            <a href="#services" className="text-xl hover:text-green-400">
              Services
            </a>
            <a href="#about" className="text-xl hover:text-green-400">
              About
            </a>
            <a href="#contact" className="text-xl hover:text-green-400">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default MobileMenu;
