'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const slogans = [
	'Digital Business Card ',
'Digital Menu ',
'Website Designing ',
	'Applications Designing ',
	'Visual identity & Graphic Designeriting'
];



export default function HeroSlogan() {
	const [visibleSlogans, setVisibleSlogans] = useState<string[]>([]);

	useEffect(() => {
		slogans.forEach((slogan, i) => {
			setTimeout(() => {
				setVisibleSlogans((prev) => [...prev, slogan]);
			}, i * 2000); // كل 2 ثانية جملة جديدة
		});
	}, []);

	return (
    <div className="flex flex-col items-center justify-start min-h-[30vh] text-center">
      {/* كلمة ثابتة */}
      <h1 className="text-xl sm:text-4xl md:text-5xl font-bold uppercase text-black bg-white rounded-xl px-2 py-1 tracking-wide">
        We create
      </h1>

      {/* الجمل المتراكمة */}
      <div className="mt-6 flex flex-col gap-2">
        {visibleSlogans.map((slogan, i) => (
          <motion.span
            key={i}
            initial={{ x: -160, rotateY: -180, opacity: 0 }}
            animate={{ x: 0, rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-xl md:text-2xl font-medium text-gray-300"
          >
            {slogan}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
