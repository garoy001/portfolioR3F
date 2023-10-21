import { useEffect, Suspense } from 'react';
import { Intro } from './Intro';
import { Nav } from './Nav';
import { WordSlideIntro } from '/Animations/wordSlideIntro.js';
import { TitleScroll } from '../Animations/titleScroll';
import { HorizontalScroll } from '../Animations/horizontalScroll';
import Lenis from '@studio-freight/lenis';

import { About } from './About';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import { CanvasOverlay } from './Canvas';
import { Tech } from './Tech';
import { Projects } from './Projects';
import { AboutScroll } from '../Animations/aboutScroll';
import { MouseControl } from '../Animations/mouse';
export const Main = () => {
	const lenis = new Lenis({
		smoothWheel: true,
	});

	lenis.on('scroll', () => {
		ScrollTrigger.update;
	});

	useEffect(() => {
		WordSlideIntro();
		TitleScroll();
		HorizontalScroll(lenis);
		AboutScroll();
		MouseControl();
		
		// window.addEventListener('mousemove', cursor);
		// window.addEventListener('mouseover', activeCursor);
		window.newObj = 0;
	}, []);
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);
	lenis.onScroll((e) => {
		console.log(e);
	});
	function raf(time) {
		lenis.raf(time);
		window.newObj = lenis.progress;

		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	return (
		<>
			<div className="cursor">
				<span className="cursor-text"></span>
			</div>
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
