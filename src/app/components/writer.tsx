"use client";

import React, { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

const Writer: FC = () => {
  const title: string = "Develop your Business with Digital Technology";

  return (
    <main className="flex -mt-20 md:mt-0 items-center justify-center px-4">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-white">
        <Typewriter
          words={[title]}
          loop={0} // 0 معناها مرة واحدة بس
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>
    </main>
  );
};

export default Writer;
