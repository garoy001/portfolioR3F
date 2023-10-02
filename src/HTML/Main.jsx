import { useEffect, Suspense } from 'react';
import { Intro } from './Intro';
import { Nav } from './Nav';
import { Projects } from './Projects';
import Lenis from '@studio-freight/lenis';
import { startSnapScroll } from '../Animations/scrollSnap';
import { About } from './About';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
export const Main = () => {
	useEffect(() => {
		// startSnapScroll();
	});

	const lenis = new Lenis();

	lenis.on('scroll', ScrollTrigger.update);

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	return (
		<>
			<Nav />
			<Intro />
			<About />
			<Suspense>
				<Projects />
			</Suspense>
		</>
	);
};
