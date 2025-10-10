import React from 'react';
import HeroLanding from './hero';
import LandingHero from './about';
import RecentWorkPage from './RecentWork';
import InfiniteMarquee from './FamilyScroll';
import Footer from './footer';
import ParticlesComponent from '../components/tsparticles';
import Services from './footer copy';
import Infinitx from './Infinitx';

const HomePage = () => {
	return (
		<div className='relative bg-gradient-to-b from-[#05013170]   to-[#07078556]'>
			<ParticlesComponent id='Particles' />

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
