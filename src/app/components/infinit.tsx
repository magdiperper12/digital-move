'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Partner {
	icon?: string;
	text: string;
}

const Infinite: React.FC = () => {
	// ✅ استخدم useMemo علشان ميعملش re-init كل render
	const infinitData = useMemo<Partner[]>(
		() => [
			{ text: 'Digital Business Card' },
			{ text: 'Digital Menu' },
			{ text: 'Website Designing' },
			{ text: 'Applications Designing' },
			{ text: 'Visual Identity & Graphic Designing' },
		],
		[]
	);

	const marqueeRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (marqueeRef.current) {
			setWidth(marqueeRef.current.scrollWidth / 2);
		}
	}, [infinitData]); // ✅ دلوقتي infinitData ثابت مش هيتغير

	return (
		<div className='text-center'>
			<div className='w-full overflow-hidden  bg-black/20  backdrop-blur-md   '>
				<motion.div
					ref={marqueeRef}
					className='flex whitespace-nowrap gap-10 text-primary dark:text-secoundry text-lg font-medium'
					animate={{ x: [-width, 0] }}
					transition={{
						duration: 30,
						ease: 'linear',
						repeat: Infinity,
					}}>
					{[...infinitData, ...infinitData].map((item, index) => (
						<div
							key={index}
							className='flex items-center text-white gap-2 px-4 min-w-max uppercase tracking-wide cursor-pointer'>
							<span className='text-5xl'>{item.text}</span>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Infinite;
