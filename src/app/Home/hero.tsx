"use client";
import { motion } from "framer-motion";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { FaWhatsapp } from "react-icons/fa";
// import HeroSlogan from "./We";
import Writer from "../components/writer";

// 🌍 Globe Component
function Globe() {
  const { scene } = useGLTF("/image/magic_orb.glb"); // ضع الملف داخل public/image/
  const globeRef = useRef<THREE.Object3D>(null);

  // دوران مستمر
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.007;
    }
  });

  return <primitive ref={globeRef} object={scene} scale={25} />;
}

// 🖼 HeroLanding Component
export default function HeroLanding() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Slogan + Canvas */}
      <div className="container mt-28 mx-auto px-4 sm:px-6 lg:px-20 py-12 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Slogan */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <Writer />
        </div>
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] mt-12 lg:mt-0 mb-10 lg:mb-0">
          <Canvas camera={{ position: [2, 5, 6] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <Suspense fallback={null}>
              <Globe />
            </Suspense>
            <OrbitControls enableZoom={false} enableRotate enablePan={false} />
          </Canvas>
        </div>{" "}
        {/* <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <HeroSlogan />
        </div> */}
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/201060725330?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
        className="fixed bottom-12 right-12 z-50 bg-green-500 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110"
        aria-label="write"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl lg:text-4xl" />
      </motion.a>
    </div>
  );
}
