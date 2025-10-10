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
				<div className='w-full lg:w-1/2 mt-10 lg:mt-0'>
					<Writer />
				</div>
				<div className='w-full lg:w-1/2 mt-10 lg:mt-0 my-72 flex justify-center items-center'>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.9, ease: 'easeOut' }}
						className='flex flex-col gap-6 lg:gap-8'>
						<p className='text-lg flex justify-start items-start gap-3 text-blue-200 tracking-wider uppercase font-medium'>
							<motion.div
								animate={{ rotate: 360 }}
								transition={{
									repeat: Infinity, // يكرر للمالانهاية
									duration: 2, // ثانية واحدة لكل لفة
									ease: 'linear', // عشان يلف بسرعة ثابتة من غير تباطؤ
								}}>
								<Image
									width={250}
									height={250}
									alt='spiral'
									className='object-cover scale-200'
									src='/spiral.webp'
								/>
							</motion.div>
						</p>
					</motion.div>
				</div>
			</div>

			{/* WhatsApp Floating Button */}
			<motion.a
				href='https://wa.me/201060725330?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85'
				className='fixed animate-bounce bottom-12 right-12 z-50 bg-green-500 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110'
				aria-label='write'>
				<FaWhatsapp className='text-2xl sm:text-3xl lg:text-4xl' />
			</motion.a>
		</div>
	);
}
