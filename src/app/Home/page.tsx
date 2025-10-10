import React from 'react';
import HeroLanding from './hero';
import LandingHero from './about';
import RecentWorkPage from './RecentWork';
import InfiniteMarquee from './FamilyScroll';
import Footer from './footer';
import Services from './footer copy';
import Infinitx from './Infinitx';

const HomePage = () => {
	return (
		<div className='relative bg-black/50'>
			<div className='relative z-10'>
				<HeroLanding />
				<Infinitx />
				{/* <Services /> */}
				<LandingHero />
				<Services />
				{/* <ScrollHero /> */}
				<InfiniteMarquee />

				<RecentWorkPage />
				<Footer />
			</div>
		</div>
	);
};

export default HomePage;
