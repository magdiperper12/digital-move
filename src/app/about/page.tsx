'use client';

import React from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
	}),
};

const services = [
	'Digital Business Card',
	'Digital Menu',
	'Website Designing',
	'Applications Designing',
	'Visual identity & Graphic Designing',
];

const AboutPage: React.FC = () => {
	const { scrollYProgress } = useScroll();

	// نربط السكورل بالترانسفورم
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
	const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<main className='min-h-screen text-gray-50 bg-black/70 pt-36 px-6 md:px-12 lg:px-24 py-16'>
			{/* Scroll Progress bar */}
			<motion.div
				style={{ scaleX: scrollYProgress }}
				className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50'
			/>

			{/* About Section */}
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={fadeUp}
				custom={0}
				style={{ scale, opacity }}
				className='max-w-3xl text-start'>
				<motion.h1
					variants={fadeUp}
					custom={0}
					className='text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-gray-50 to-gray-500 bg-clip-text text-transparent'>
					About DigitalMove
				</motion.h1>

				<motion.p
					variants={fadeUp}
					custom={1}
					className='text-2xl leading-relaxed text-gray-400'>
					We are a Digital Technology Company Established in England 5 years
					ago. We help New Businesses Develop and Present their Work in a
					Professional Manner that is Appropriate for the European and Global
					Labour Market.
				</motion.p>

				<motion.p
					variants={fadeUp}
					custom={2}
					className='mt-4 text-lg text-gray-500'>
					DigitalMove has become a world-renowned studio trusted by many
					businesses worldwide.
				</motion.p>
			</motion.div>

			{/* Services Section */}
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				style={{ y }}
				className='grid grid-cols-1 lg:mb-24 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full max-w-5xl'>
				{services.map((service, i) => (
					<motion.div
						key={service}
						variants={fadeUp}
						custom={i + 1}
						className='p-6 bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center'>
						<h3 className='text-lg md:text-xl font-semibold text-gray-200'>
							{service}
						</h3>
					</motion.div>
				))}
			</motion.div>
		</main>
	);
};

export default AboutPage;
