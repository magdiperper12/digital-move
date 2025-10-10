'use client';

import { motion } from 'framer-motion';

const Services = () => {
	const listVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // يخلي كل عنصر يتأخر 0.2 ثانية عن اللي قبله
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -50 }, // يجي من الشمال
		visible: { opacity: 1, x: 0 },
	};

	return (
		<div className='w-full z-50 text-white px-8 mb-72 py-12 md:px-20'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12'>
				{/* Services Section */}
				<div className='space-y-4'>
					<h2 className='text-5xl md:text-6xl font-bold tracking-wider text-gradient bg-gradient-to-r from-gray-50 to-gray-500 bg-clip-text text-transparent'>
						SERVICES<span className='text-indigo-50'>.</span>
					</h2>

					{/* Animated List */}
					<motion.ul
						className='space-y-3 text-xl font-semibold text-gray-200'
						variants={listVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }} // يبدأ لما 20% من العنصر يظهر
					>
						{[
							'Digital Business Card',
							'Digital Menu',
							'Website Designing',
							'Applications Designing',
							'Visual identity & Graphic Designing',
						].map((service, index) => (
							<motion.li
								key={index}
								variants={itemVariants}>
								{service}
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>
		</div>
	);
};

export default Services;
