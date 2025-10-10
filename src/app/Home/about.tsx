'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, MeshWobbleMaterial } from '@react-three/drei';
import Image from 'next/image';

export default function LandingHero() {
	return (
		<main className='min-h-screen w-full bg-[#0b0f1a] text-white overflow-hidden flex items-center'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20'>
				{/* النصوص والكورة */}
				<div className='flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20'>
					{/* النصوص left */}
					<div className='flex-1 text-start lg:text-left relative'>
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
										width={40}
										height={40}
										alt='spiral'
										className='object-cover scale-150'
										src='/spiral.webp'
									/>
								</motion.div>
								About Us
							</p>

							<h1 className='text-[7vw] sm:text-[5vw] lg:text-[2.5vw] leading-tight font-light text-white max-w-2xl mx-auto lg:mx-0'>
								We are a Digital Technology Company Established in England 5
								years ago. We help New Businesses Develop and Present their Work
								in a Professional Manner that is Appropriate for the European
								and Global Labour Market.
							</h1>

							<p className='text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0'>
								DigitalMove has become a world-renowned studio trusted by many
								businesses worldwide.
							</p>
						</motion.div>
					</div>

					{/* الكورة right */}
					{/* <motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: 'easeOut' }}
						className='flex-1 w-full h-[300px] sm:h-[400px] lg:h-[500px]'>
						<Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
							<ambientLight intensity={0.6} />
							<directionalLight
								position={[5, 5, 5]}
								intensity={0.6}
							/>
							<FloatingBlob />
							<OrbitControls
								enableZoom={false}
								enablePan={false}
								autoRotate
								autoRotateSpeed={0.8}
							/>
						</Canvas>
					</motion.div> */}
				</div>

				{/* النص أسفل الصفحة */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className='flex items-center justify-center lg:justify-between mt-10'>
					<p className='text-sm sm:text-base text-gray-400'>
						DigitalMove has become a world-renowned studio
					</p>
					<SmallIcon />
				</motion.div>
			</div>
		</main>
	);
}

// function FloatingBlob() {
// 	return (
// 		<mesh scale={[3, 3, 3]}>
// 			<sphereGeometry args={[1, 128, 64]} />
// 			<MeshWobbleMaterial
// 				color='#273092'
// 				factor={0.9}
// 				speed={2}
// 				roughness={0.3}
// 				metalness={0.3}
// 			/>
// 		</mesh>
// 	);
// }

function SmallIcon() {
	return (
		<motion.div
			whileHover={{ scale: 1.1, rotate: 10 }}
			transition={{ type: 'spring', stiffness: 200 }}
			className='w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center ml-6'>
			<svg
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M3 12h18'
					stroke='#9aa0a6'
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
				<path
					d='M3 6h12'
					stroke='#9aa0a6'
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
			</svg>
		</motion.div>
	);
}
