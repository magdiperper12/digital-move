'use client';

import { motion } from 'framer-motion';

const Services = () => {
	const listVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<div className='w-full z-50 overflow-hidden mb-72 text-white px-6 sm:px-10 lg:px-20 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-16'>
			{/* Services Section */}
			<div className='w-full lg:w-1/2 space-y-6'>
				<h2 className='text-5xl lg:text-6xl font-bold tracking-wider bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent'>
					SERVICES<span className='text-indigo-50'>.</span>
				</h2>

				<motion.ul
					className='space-y-3 text-xl font-semibold text-gray-200'
					variants={listVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}>
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

			{/* Spiral Animation Section */}
			<div className='w-full lg:w-1/2 flex justify-center items-center'>
				<div className='flex flex-col gap-6 lg:gap-10'>
					<div className='text-lg rounded-3xl scale-125 my-12 overflow-hidden flex justify-center lg:justify-start items-center gap-3 text-blue-200 tracking-wider uppercase font-medium'>
						<div>
							<video
								src='/work/service.mp4'
								autoPlay
								loop
								muted
								playsInline
								className='object-contain w-[250px] h-[250px] scale-200 rounded-full'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
