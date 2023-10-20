import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export const WordSlideIntro = () => {
	// gsap.registerPlugin(ScrollTrigger);
	gsap.from('.nav-wrapper', {
		y: -100,
		scrollTrigger: {
			trigger: 'html',
			start: 'top+=50px',
			end: 'top+=100px top',
			scrub: true,
			// markers: true,
		},
	});
	const wordGroupOne = document.querySelectorAll('.word-roulette-1');
	const wordGroupTwo = document.querySelectorAll('.word-roulette-3');
	const wordGroupThree = document.querySelectorAll('.word-roulette-2');
	const wordGroupFour = document.querySelectorAll('.modal-word');
	const delayVar = 3;
	const timeLine = gsap.timeline({ repeat: -1 }, '-=2');
	const timeLine2 = gsap.timeline({ repeat: -1 }, '-=2');
	const timeLine3 = gsap.timeline({ repeat: -1 }, '-=2');
	const timeLine4 = gsap.timeline({ repeat: -1 }, '-=2');
	const timeLine5 = gsap.timeline({
		repeat: -1,
		defaults: { duration: 0, repeat: -1 },
	});

	timeLine.to(wordGroupOne, {
		keyframes: [
			{ top: '-120%', duration: 2, delay: delayVar },
			{ top: '240%', duration: 0, delay: 0 },
			{ top: '120%', duration: 2, delay: delayVar },
			{ top: '0%', duration: 2, delay: delayVar },
		],
	});
	timeLine2.to(wordGroupTwo, {
		keyframes: [
			{ top: '0%', duration: 2, delay: delayVar },
			{ top: '-120%', duration: 2, delay: delayVar },
			{ top: '240%', duration: 0, delay: 0 },
			{ top: '120%', duration: 2, delay: delayVar },
		],
	});
	timeLine3.to(wordGroupThree, {
		keyframes: [
			{ top: '120%', duration: 2, delay: delayVar },
			{
				top: '0%',
				duration: 2,
				delay: delayVar,
			},
			{
				top: '-120%',
				duration: 2,
				delay: delayVar,
			},
			{ top: '240%', duration: 0, delay: 0 },
		],
	});

	timeLine4
		.to(wordGroupFour[3], { opacity: 0, duration: 0 })
		.to(wordGroupFour[2], { opacity: 0, duration: 0 })
		.to(wordGroupFour[1], { opacity: 0, duration: 0 })
		.to(wordGroupFour[0], { opacity: 1, duration: 0 })
		.to(wordGroupFour, {
			rotateX: '-90deg',
			duration: 1,
			ease: 'power4.in',
		})
		.to(wordGroupFour[0], { opacity: 0, duration: 0 })
		.to(wordGroupFour[1], { opacity: 1, duration: 0 })
		.to(wordGroupFour, { rotateX: '0deg', duration: 1 })
		.to(wordGroupFour, {
			rotateX: '-90deg',
			duration: 1,
			ease: 'power4.in',
		})
		.to(wordGroupFour[1], { opacity: 0, duration: 0 })
		.to(wordGroupFour[2], { opacity: 1, duration: 0 })
		.to(wordGroupFour, { rotateX: '0deg', duration: 1 })
		.to(wordGroupFour, {
			rotateX: '-90deg',
			duration: 1,
			ease: 'power4.in',
		})
		.to(wordGroupFour[2], { opacity: 0, duration: 0 })
		.to(wordGroupFour[3], { opacity: 1, duration: 0 })
		.to(wordGroupFour, { rotateX: '0deg', duration: 1 })
		.to(wordGroupFour, {
			rotateX: '-90deg',
			duration: 1,
			ease: 'power4.in',
		})
		.to(wordGroupFour[3], { opacity: 0, duration: 0 })
		.to(wordGroupFour[0], { opacity: 1, duration: 0 })
		.to(wordGroupFour, { rotateX: '0deg', duration: 1 });
};
