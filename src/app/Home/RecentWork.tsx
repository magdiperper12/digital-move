'use client';

import React from 'react';
import { motion } from 'framer-motion';

const works = [
	'/work/work1.mp4',
	'/work/work2.mp4',
	'/work/work3.mp4',
	'/work/work4.mp4',
	'/work/work5.mp4',
];

export default function RecentWork() {
	return (
		<section className='w-full text-white py-16 sm:py-20 px-4 sm:px-6'>
			{/* Title */}
			<motion.h2
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				viewport={{ once: false, amount: 0.3 }}
				className='text-5xl  md:text-7xl font-extrabold mb-20 mt-32 text-start '>
				RECENT{' '}
				<span className='text-gradient bg-gradient-to-r from-gray-50 to-gray-500 bg-clip-text text-transparent'>
					WORK
				</span>
				<span className='text-gray-500'>.</span>
			</motion.h2>

			{/* Gallery */}
			<div className='flex flex-col gap-10 sm:gap-16'>
				{works.map((src, i) => {
					const isEven = i % 2 === 0;

					const VideoCard = (
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								y: 40,
								filter: 'blur(15px)',
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								y: 0,
								filter: 'blur(0px)',
							}}
							transition={{
								delay: 0.1,
								duration: 0.7,
								ease: 'easeOut',
							}}
							viewport={{ once: false, amount: 0.3 }}
							className='relative w-full h-80  rounded-xl overflow-hidden shadow-xl group'>
							<video
								src={src}
								autoPlay
								loop
								muted
								playsInline
								className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500' />
						</motion.div>
					);

					return (
						<div
							key={i}
							className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto items-center'>
							{isEven ? (
								<>
									{VideoCard}
									<div className='hidden md:block w-full h-72 rounded-xl bg-transparent'></div>
								</>
							) : (
								<>
									<div className='hidden md:block w-full h-72 rounded-xl bg-transparent'></div>
									{VideoCard}
								</>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
