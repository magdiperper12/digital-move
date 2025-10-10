'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Writer from '../components/writer';

export default function HeroLanding() {
	return (
		<div className='min-h-screen text-white relative overflow-hidden'>
			{/* Slogan + Canvas */}
			<div className='container mt-28 mx-auto px-4 sm:px-6 lg:px-20 py-12 flex flex-col-reverse lg:flex-row items-center justify-between'>
				{/* Slogan */}

				{/* Video Section */}
				<div className='w-full lg:w-1/2  mb-32 px-6 pt-32 flex justify-center items-center'>
					<motion.div className='flex flex-col gap-6 lg:gap-8'>
						<div className='text-lg flex px-5 justify-start items-start gap-3 text-blue-200 tracking-wider uppercase font-medium'>
							<div className='rounded-full  scale-200 p-12 overflow-hidden shadow-xl'>
								<video
									src='/work/heros.mp4'
									autoPlay
									muted
									loop
									playsInline
									className='object-cover  scale-100 rounded-2xl'
								/>
							</div>
						</div>
					</motion.div>
				</div>
				<div className='w-full lg:w-1/2 '>
					<Writer />
				</div>
			</div>

			{/* WhatsApp Floating Button */}
		</div>
	);
}
