import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export const AboutScroll = () => {
	const children = gsap.utils.toArray('.text-reveal');
	let prevChild;
	children.forEach((child, index) => {
		gsap.to(child, {
			opacity: 1,
			ease: 'power4',
			duration: 3,
			delay: 0.5,
			scrollTrigger: {
				trigger: child,
				start: `top center+=20px`,
				end: 'center center',
				scrub: true,
				// markers: true,
			},
		});

		prevChild = child;

		gsap.from(child, {
			x: 100,
			ease: 'power4',
			duration: 1,
			scrollTrigger: {
				trigger: child,
				start: `top center+=20px`,
				end: 'center center',
				scrub: 1,
				// markers: true,
			},
		});
	});
};
