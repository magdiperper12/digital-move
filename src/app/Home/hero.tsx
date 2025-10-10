'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { FaWhatsapp } from 'react-icons/fa';
// import HeroSlogan from "./We";
import Writer from '../components/writer';
import Image from 'next/image';

// 🖼 HeroLanding Component
export default function HeroLanding() {
	return (
		<div className='min-h-screen text-white relative overflow-hidden'>
			{/* Slogan + Canvas */}
			<div className='container mt-28 mx-auto px-4 sm:px-6 lg:px-20 py-12 flex flex-col-reverse lg:flex-row items-center justify-between'>
				{/* Slogan */}
				<div className='w-full lg:w-1/2 '>
					<Writer />
				</div>
				<div className='w-full lg:w-1/2 mb-64 lg:mt-0 mt-24 flex justify-center items-center'>
					<motion.div className='flex flex-col gap-6 lg:gap-8'>
						<p className='text-lg flex justify-start items-start gap-3 text-blue-200 tracking-wider uppercase font-medium'>
							<div>
								<Image
									width={300}
									height={300}
									alt='spiral'
									className='object-cover scale-150'
									src='/heroke.gif'
								/>
							</div>
						</p>
					</motion.div>
				</div>
			</div>

			{/* WhatsApp Floating Button */}
			<motion.a
				href='https://wa.me/201060725330?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85'
				className='fixed animate-bounce bottom-12 right-12 z-50 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110'
				aria-label='write'>
				<FaWhatsapp className='text-4xl' />
			</motion.a>
		</div>
	);
}
