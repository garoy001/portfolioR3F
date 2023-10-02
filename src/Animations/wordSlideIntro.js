import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export const WordSlideIntro = () => {
	// gsap.registerPlugin(ScrollTrigger);
	const wordGroupOne = document.querySelectorAll('.word-roulette-1');
	const wordGroupTwo = document.querySelectorAll('.word-roulette-3');
	const wordGroupThree = document.querySelectorAll('.word-roulette-2');
	const wordGroupFour = document.querySelectorAll('.modal-word');
	const delayVar = 3;
	const timeLine = gsap.timeline({ repeat: -1 });
	const timeLine2 = gsap.timeline({ repeat: -1 });
	const timeLine3 = gsap.timeline({ repeat: -1 });
	const timeLine4 = gsap.timeline({ repeat: -1 });
	const timeLine5 = gsap.timeline({ repeat: -1 });

	timeLine.to(wordGroupOne, { top: '-120%', duration: 2, delay: delayVar });
	timeLine.to(wordGroupOne, { top: '240%', duration: 0, delay: 0 });
	timeLine.to(wordGroupOne, { top: '120%', duration: 2, delay: delayVar });
	timeLine.to(wordGroupOne, { top: '0%', duration: 2, delay: delayVar });

	timeLine2.to(wordGroupTwo, { top: '0%', duration: 2, delay: delayVar });
	timeLine2.to(wordGroupTwo, { top: '-120%', duration: 2, delay: delayVar });
	timeLine2.to(wordGroupTwo, { top: '240%', duration: 0, delay: 0 });
	timeLine2.to(wordGroupTwo, { top: '120%', duration: 2, delay: delayVar });

	timeLine3.to(wordGroupThree, { top: '120%', duration: 2, delay: delayVar });
	timeLine3.to(wordGroupThree, {
		top: '0%',
		duration: 2,
		delay: delayVar,
	});
	timeLine3.to(wordGroupThree, {
		top: '-120%',
		duration: 2,
		delay: delayVar,
	});
	timeLine3.to(wordGroupThree, { top: '240%', duration: 0, delay: 0 });

	timeLine4.to(wordGroupFour[3], { css: { opacity: 0 }, duration: 0 });
	timeLine4.to(wordGroupFour[2], { css: { opacity: 0 }, duration: 0 });
	timeLine4.to(wordGroupFour[1], { css: { opacity: 0 }, duration: 0 });
	timeLine4.to(wordGroupFour[0], { css: { opacity: 1 }, duration: 0 });
	timeLine4.to(wordGroupFour, {
		rotateX: '-90deg',
		duration: 1,
		ease: 'power4.in',
	});
	timeLine4.to(wordGroupFour[0], { css: { opacity: 0 }, duration: 0 });
	timeLine4.to(wordGroupFour[1], { css: { opacity: 1 }, duration: 0 });
	timeLine4.to(wordGroupFour, { rotateX: '0deg', duration: 1 });
	timeLine4.to(wordGroupFour, {
		rotateX: '-90deg',
		duration: 1,
		ease: 'power4.in',
	});
	timeLine4.to(wordGroupFour[1], { css: { opacity: 0 }, duration: 0 });
	timeLine4.to(wordGroupFour[2], { css: { opacity: 1 }, duration: 0 });
	timeLine4.to(wordGroupFour, { rotateX: '0deg', duration: 1 });
	timeLine4.to(wordGroupFour, {
		rotateX: '-90deg',
		duration: 1,
		ease: 'power4.in',
	});
	timeLine4.to(wordGroupFour[2], { css: { opacity: 0 }, duration: 0 });
	timeLine4.to(wordGroupFour[3], { css: { opacity: 1 }, duration: 0 });
	timeLine4.to(wordGroupFour, { rotateX: '0deg', duration: 1 });
	timeLine4.to(wordGroupFour, {
		rotateX: '-90deg',
		duration: 1,
		ease: 'power4.in',
	});
	timeLine4.to(wordGroupFour[3], { css: { opacity: 0 }, duration: 0 });
	timeLine4.to(wordGroupFour[0], { css: { opacity: 1 }, duration: 0 });
	timeLine4.to(wordGroupFour, { rotateX: '0deg', duration: 1 });

	timeLine.play();
	timeLine2.play();
	timeLine3.play();
	timeLine4.play();
	timeLine5.play();
};
