"use client";

import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshWobbleMaterial } from "@react-three/drei";


export default function LandingHero() {
  return (
    <main className="min-h-screen w-full  text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-20">
        {/* النصوص والكورة جنب بعض في الديسكتوب وتحت بعض في الموبايل */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
          {/* النصوص left */}
          <div className="flex-1 text-left relative ">
            {/* <div className="w-10 h-10  absolute top-0 left-0 rounded-md flex items-center justify-center bg-transparent">
              <Image
                src="/image/smlogo.png"
                alt="Digital Mov"
                fill
                priority
                className="object-contain -mt-96"
              />
            </div> */}

            <aside className="flex flex-col gap-6 lg:gap-10 mt-6">
              <div className="hidden lg:block">
                <p className="text-sm text-gray-300 tracking-wider">ABOUT</p>
              </div>

              {/* Desktop long text */}
              <div className="hidden lg:block">
                <h3 className="text-xs font-semibold tracking-wider text-gray-300 max-w-xs leading-relaxed">
                  We are a Digital Technology Company Established in England 5
                  years ago. We help New Businesses Develop and Present their
                  Work in a Professional Manner that is Appropriate for the
                  European and Global Labour Market.
                </h3>
                <p className="mt-6 text-gray-400 max-w-xs">
                  DigitalMove has become a world - renowned studio
                </p>
              </div>

              {/* Mobile short copy */}
              <div className="lg:hidden">
                <p className="text-sm text-gray-300 leading-snug">
                  DELIVERING INNOVATIVE DIGITAL EXPERIENCES
                </p>
              </div>
            </aside>

            {/* العنوان الكبير */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-8 text-[8vw]  uppercase lg:text-[3vw] leading-[1.1] font-extralight tracking-tight text-white max-w-full lg:max-w-[900px]"
            >
              We are a Digital Technology Company Established in England 5 years
              ago. We help New Businesses Develop and Present their Work in a
              Professional Manner that is Appropriate for the European and
              Global Labour Market.
            </motion.h1>

            {/* نص صغير تحت الكورة (هيظهر برضو تحت في الموبايل) */}
            <p className="text-sm text-gray-400 mt-6 max-w-xl">
              DigitalMove has become a world - renowned studio
            </p>
          </div>

          {/* الكورة right */}
          <div className="flex-1 hidden lg:flex w-full lg:max-w-4xl sm:h-[500px]  lg:h-[600px]">
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={0.6} />
              <FloatingBlob />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.6}
              />
            </Canvas>
          </div>
        </div>

        {/* النص أسفل الصفحة في الديسكتوب */}
        <div className="hidden lg:flex items-center justify-between mt-12">
          <p className="text-sm text-gray-400">
            DigitalMove has become a world - renowned studio
          </p>
        </div>
        <SmallIcon />
      </div>
    </main>
  );
}

function FloatingBlob() {
  return (
    <mesh position={[0, 0, 0]} scale={[3, 3, 3]}>
      <sphereGeometry args={[1, 200, 64]} />
      <MeshWobbleMaterial
        color="#273092" // الأزرق
        factor={0.8}
        speed={2}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
}

function SmallIcon() {
  return (
    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-gray-600 flex items-center justify-center mt-6 lg:mt-0">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12h18"
          stroke="#9aa0a6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 6h12"
          stroke="#9aa0a6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
