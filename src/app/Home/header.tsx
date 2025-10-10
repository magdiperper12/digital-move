'use client';

// import { AnimatePresence, motion } from "framer-motion";
import React from 'react';
import Image from 'next/image';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineMenu } from 'react-icons/hi';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='w-full   fixed -top-3 left-0  z-50 '>
			<header className=' backdrop-blur-md shadow-md  rounded-3xl  '>
				<div className='flex items-center justify-between  px-4 pt-2'>
					{/* Logo */}
					<div className='flex-shrink-0 w-24 h-24  relative'>
						<Image
							src='/image/dglogo.png'
							alt='Digital Mov'
							fill
							priority
							className='object-contain scale-150'
						/>
					</div>
					<div
						onClick={() => setIsOpen(true)}
						className='flex-shrink-0  w-28 h-28    flex  items-center justify-center '>
						<button className='p-2 scale-110 rounded-lg bg-gray-900 text-white focus:outline-none'>
							<HiOutlineMenu
								size={28}
								className=''
							/>
						</button>
					</div>
					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{ x: '100%' }}
								animate={{ x: 0 }}
								exit={{ x: '100%' }}
								transition={{ duration: 0.4, ease: 'easeInOut' }}
								className='fixed top-4 right-4 w-full h-screen bg-black text-white flex flex-col items-center justify-center z-[999]'>
								{/* زرار غلق */}
								<button
									onClick={() => setIsOpen(false)}
									className='absolute top-6 right-6 text-3xl font-bold'>
									✕
								</button>

								{/* اللينكات */}
								<nav className='flex flex-col gap-8 text-3xl font-semibold'>
									<a
										href='/Home'
										onClick={() => setIsOpen(false)}>
										Home
									</a>
									<a
										href='/about'
										onClick={() => setIsOpen(false)}>
										About
									</a>
									<a
										href='/what-we-do'
										onClick={() => setIsOpen(false)}>
										what we do
									</a>
								</nav>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</header>
		</div>
	);
};

export default Header;
