import { useEffect, Suspense } from 'react';
import { Intro } from './Intro';
import { Nav } from './Nav';

import Lenis from '@studio-freight/lenis';

import { About } from './About';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import { CanvasOverlay } from './Canvas';
import { Tech } from './Tech';
import { Projects } from './Projects';
export const Main = () => {
	const lenis = new Lenis();

	lenis.on('scroll', () => {
		ScrollTrigger.update;
	});
	useEffect(() => {
		window.newObj = 0;
	}, []);
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);
	function raf(time) {
		lenis.raf(time);
		window.newObj = lenis.progress;

		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
	
	return (
		<>
			<Nav />
			<Intro />
			<div className="pin-scrolling-section">
				<About />
				<Projects />
				<Tech />
			</div>

			<Suspense>
				<CanvasOverlay />
			</Suspense>
		</>
	);
};
