'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 50, scale: 0.95, rotate: -5 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		rotate: 0,
		transition: { duration: 0.8, ease: 'easeOut' },
	},
};

const fadeDown: Variants = {
	hidden: { opacity: 0, y: -50, scale: 0.95, rotate: 5 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		rotate: 0,
		transition: { duration: 0.8, ease: 'easeOut' },
	},
};

export default function WhatWeDo() {
	const services = [
		{
			title: 'Digital Business Card',
			description:
				'Smart, interactive business cards to make strong and modern impressions.',
		},
		{
			title: 'Digital Menu',
			description:
				'Dynamic digital menus for restaurants and cafes with smooth navigation.',
		},
		{
			title: 'Website Designing',
			description:
				'We design responsive, elegant websites with creativity and usability in mind.',
		},
		{
			title: 'Applications Designing',
			description:
				'User-focused application designs with modern patterns and fluid interfaces.',
		},
		{
			title: 'Visual identity & Graphic Designing',
			description:
				'Brand-focused visual identities and graphics that speak to your audience.',
		},
	];

	return (
		<main className='min-h-screen bg-black/70 text-gray-50 pt-36 px-6 md:px-12 lg:px-24 py-16'>
			{/* Hero Section */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.3 }}
				variants={fadeDown}
				className='text-center max-w-2xl mx-auto mb-16'>
				<h1 className='text-4xl md:text-5xl font-bold mb-4'>What We Do</h1>
				<p className='text-lg text-gray-400'>
					We build digital solutions like menus, business cards, and modern
					websites that empower your brand.
				</p>
			</motion.section>

			{/* Services Grid */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.2 }}
				variants={{
					hidden: {},
					visible: { transition: { staggerChildren: 0.25 } },
				}}
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{services.map((svc, i) => (
					<motion.div
						key={svc.title}
						variants={i % 2 === 0 ? fadeUp : fadeDown}
						className='bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-500'
						whileHover={{ scale: 1.08, rotate: 1 }}
						whileTap={{ scale: 0.97 }}>
						<h3 className='text-xl md:text-2xl font-semibold mb-3 text-gradient bg-gradient-to-r from-gray-50 to-gray-500 bg-clip-text text-transparent'>
							{svc.title}
						</h3>
						<p className='text-gray-400'>{svc.description}</p>
					</motion.div>
				))}
			</motion.section>

			{/* Extra Section */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.3 }}
				variants={fadeUp}
				className='mt-20 max-w-3xl mx-auto text-center'>
				<h2 className='text-2xl md:text-3xl font-bold mb-4'>
					Our Creative Approach
				</h2>
				<p className='text-gray-400 text-lg'>
					We mix motion, design, and technology to craft impactful digital
					experiences that elevate your brand presence.
				</p>
			</motion.section>
		</main>
	);
}
