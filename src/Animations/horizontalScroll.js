import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const HorizontalScroll = (lenis) => {
	gsap.registerPlugin(ScrollTrigger);

	const projectsArr = gsap.utils.toArray('.projects-wrapper');
	const rightSide = document.getElementsByClassName('right-side-p')[0];
	let sections = document.querySelectorAll('.project-wrapper');

	sections.forEach((e) => {
		e.style.minWidth = `${rightSide.offsetWidth + 2}px`;
		e.style.width = `${rightSide.offsetWidth + 2}px`;
	});

	projectsArr.forEach((e, index) => {
		const length = e.childNodes.length;
		const getScrollAmount = () => {
			// let scrollWidth = -1 * (e.scrollWidth - sections[0].offsetWidth);
			let scrollWidth = -1 * (e.scrollWidth - sections[0].offsetWidth);

			return scrollWidth;
		};
		const tween = gsap.to(e, {
			x: getScrollAmount(),
			// maskImage: ,
			duration: 3,
			ease: 'none',
		});

		ScrollTrigger.create({
			trigger: e,
			start: 'top top',
			end: `bottom top`,
			pin: true,
			pinSpacing: true,
			animation: tween,
			scrub: true,
			invalidateOnRefresh: true,
			snap: {
				snapTo: 1 / (length - 1),
				directional: false,
				duration: 0.5,
				ease: 'power1.inOut',
				delay: 0.1,
			},
		});

		const children = gsap.utils.toArray(`.project-wrapper-${index + 1}`);

		const t1 = gsap.timeline({ paused: true });
		children.forEach((child, key) => {
			if (key != length - 1) {
				t1.to(child, {
					opacity: 0,
					ease: 'power4',
					duration: 3,
					delay: 0.5,
				});
			}

			ScrollTrigger.create({
				trigger: e,
				start: `top top`,
				bottom: `+=20px`,
				scrub: true,
				animation: t1,
				// markers: true,
			});
		});
	});
	///Sets the opacity of the projects section
	ScrollTrigger.create({
		trigger: '#project-section',
		start: 'top-=100px top',
		onEnter: () => {
			gsap.fromTo(
				'#project-section',
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5 }
			);
		},
		onEnterBack: () => {
			gsap.fromTo(
				'#project-section',
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5 }
			);
		},
		onLeaveBack: () => {
			gsap.fromTo(
				'#project-section',
				{ opacity: 1 },
				{ opacity: 0, duration: 0.5 }
			);
		},

		scrub: true,
	});
};
