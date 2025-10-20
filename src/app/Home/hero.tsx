"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
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

  return <primitive ref={globeRef} object={scene} scale={45} />;
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
        <div className="w-full lg:w-1/2 flex justify-center items-center h-[300px] md:h-[400px] lg:h-[500px] mt-12 lg:mt-0 mb-10 lg:mb-0">
          <Canvas camera={{ position: [9, 9, 9] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-9, -9, -9]} />
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
    </div>
  );
}
