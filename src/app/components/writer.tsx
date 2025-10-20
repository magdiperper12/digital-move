"use client";

import React, { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

const Writer: FC = () => {
  const title: string = "Develop your Business with Digital Technology";

  return (
    <main className="flex mt-10 items-center justify-center px-4">
      <h1 className="text-center text-3xl font-bold text-gradient bg-gradient-to-r from-gray-50 to-gray-500 bg-clip-text text-transparent">
        <Typewriter
          words={[title]}
          loop={Infinity} // مرة واحدة فقط
          cursor
          cursorStyle="|"
          typeSpeed={90}
          deleteSpeed={45}
          delaySpeed={2000}
        />
      </h1>
    </main>
  );
};

export default Writer;
