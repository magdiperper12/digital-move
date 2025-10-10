'use client';

import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

type Card = {
	id: number;
	title: string;
	body: string;
};

const CARDS: Card[] = [
	{
		id: 1,
		title: 'Expertise',
		body: 'We are a group of dedicated experts driven by a deep commitment to our field.',
	},
	{
		id: 2,
		title: 'Reliability',
		body: 'We deliver consistent quality and are a partner you can rely on.',
	},
	{
		id: 3,
		title: 'Creativity',
		body: 'Bold design and smart engineering to make your product stand out.',
	},
	{
		id: 4,
		title: 'Scale',
		body: 'We build systems and processes that grow with your business.',
	},
	{
		id: 5,
		title: 'Reliability',
		body: 'We deliver consistent quality and are a partner you can rely on.',
	},
	{
		id: 6,
		title: 'Creativity',
		body: 'Bold design and smart engineering to make your product stand out.',
	},
	{
		id: 7,
		title: 'Scale',
		body: 'We build systems and processes that grow with your business.',
	},
];

export default function ScrollHero() {
	const targetRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start start', 'end end'],
	});

	// نحول السكورول الرأسي لحركة أفقية
	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

	return (
		<section
			ref={targetRef}
			className='relative scale-90 md:scale-100 h-[300vh] text-white'>
			{/* Scroll Container */}
			<div className='sticky top-0 h-screen flex items-center overflow-hidden'>
				<motion.div
					style={{ x }}
					className='flex gap-12 px-20'>
					{CARDS.map((c, i) => (
						<motion.article
							key={c.id}
							className='flex-none w-[520px] md:w-[560px] lg:w-[640px] bg-[#000088] rounded-2xl p-8 border border-[rgba(255,255,255,0.03)] shadow-lg'
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
							whileHover={{ scale: 1.02 }}>
							<div className='flex items-start gap-3'>
								<div className='w-3 h-3 rounded-full border border-[#7b85ff] mt-1' />
								<div className='text-xs uppercase tracking-widest text-gray-300'>
									Rule No.{c.id}
								</div>
							</div>
							<h2 className='mt-4 text-4xl md:text-5xl font-extrabold tracking-tight'>
								{c.title}
							</h2>
							<p className='mt-4 text-gray-300 leading-7'>{c.body}</p>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
}
