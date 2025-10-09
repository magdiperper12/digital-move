"use client";

// import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import MobileMenu from "../components/mobileMenu";

const Header = () => {
  return (
    <div className="w-full p-3  fixed top-0 left-0  z-50 ">
      <header className=" backdrop-blur-md shadow-md  rounded-2xl ">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 ">
          {/* Logo */}
          <div className="flex-shrink-0 w-24 h-24  relative">
            <Image
              src="/image/dglogo.png"
              alt="Digital Mov"
              fill
              priority
              className="object-contain scale-150"
            />
          </div>
          <div className="flex-shrink-0  w-24 h-24    flex  items-center justify-center ">
            <MobileMenu />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
