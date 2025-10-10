'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
	const [email, setEmail] = useState('');

	return (
		<footer className='w-full z-50 text-white px-8 py-12 md:px-20'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12'>
				{/* Studio Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='space-y-6'>
					<h2 className='text-5xl md:text-6xl font-bold tracking-wider text-gradient bg-gradient-to-r from-gray-50 to-gray-500 bg-clip-text text-transparent'>
						STUDIO<span className='text-gray-500'>.</span>
					</h2>
					<p className='text-sm text-gray-400'>WORK REMOTELY</p>

					{/* Newsletter */}
					<div className='space-y-3'>
						<p className='text-sm uppercase text-gray-400'>Newsletter</p>
						<div className='flex border-b border-gray-600 items-center'>
							<input
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Your Email'
								className='bg-transparent flex-1 py-2 text-sm focus:outline-none'
							/>
							<button className='text-gray-400 hover:text-gray-300 transition-all'>
								→
							</button>
						</div>
					</div>
				</motion.div>

				{/* Services Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='space-y-4'>
					<h2 className='text-5xl md:text-6xl font-bold tracking-wider text-gradient bg-gradient-to-r from-gray-50 to-gray-500 bg-clip-text text-transparent'>
						SERVICES<span className='text-gray-500'>.</span>
					</h2>
					<ul className='space-y-2 text-sm text-gray-300'>
						<li>Website Design</li>
						<li>E-Commerce</li>
						<li>SaaS Development</li>
						<li>Front-end Development</li>
						<li>Back-end Development</li>
						<li>Website Support</li>
						<li>Social Media Advertising</li>
						<li>SEO</li>
					</ul>
				</motion.div>

				{/* Work Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className='space-y-6'>
					<h2 className='text-5xl md:text-6xl font-bold tracking-wider text-gradient bg-gradient-to-r from-gray-50 to-gray-500 bg-clip-text text-transparent'>
						WORK<span className='text-gray-500'>.</span>
					</h2>
					<p className='text-sm text-gray-400'>©2025 DigitalMove</p>

					{/* Social Links */}
					<div className='flex space-x-6 text-sm text-gray-300'>
						<Link href='#'>LinkedIn</Link>
						<Link href='#'>Instagram</Link>
						<Link href='#'>Facebook</Link>
						<Link href='#'>Whatsapp</Link>
					</div>
				</motion.div>
			</div>

			{/* Bottom - Let's Talk */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className='text-center mt-12'>
				<h2 className='text-5xl md:text-6xl font-bold tracking-wider text-gradient bg-gradient-to-r from-gray-50 to-gray-500 bg-clip-text text-transparent'>
					LET’S TALK<span className='text-gray-500'>.</span>
				</h2>
			</motion.div>
		</footer>
	);
};

export default Footer;
