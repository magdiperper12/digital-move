'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Splash() {
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push('/Home');
		}, 3000); // 5 ثواني

		return () => clearTimeout(timer);
	}, [router]);

	return (
		<main className='relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#000000]   to-[#000041]'>
			{/* موجات مائية */}
			<div className='absolute inset-0 flex items-center justify-center'>
				{[...Array(3)].map((_, i) => (
					<motion.div
						key={i}
						className='absolute rounded-full bg-blue-600 backdrop-blur-md'
						initial={{ scale: 0, opacity: 0.8 }}
						animate={{ scale: 6, opacity: 0 }}
						transition={{
							duration: 5,
							repeat: Infinity,
							delay: i * 1.5,
							ease: 'easeOut',
						}}
						style={{ width: 200, height: 200 }}
					/>
				))}
			</div>

			{/* اللوجو */}
			<div className='relative z-10'>
				<Image
					src='/image/dglogo.png'
					alt='Digital Mov'
					width={300}
					height={300}
					priority
					className='mx-auto'
				/>
			</div>
		</main>
	);
}
