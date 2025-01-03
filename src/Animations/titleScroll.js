import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
let prevNavLink = null;
export const TitleScroll = () => {
	gsap.registerPlugin(ScrollTrigger);

	let sectionsSelector2 = document.querySelectorAll('.project-wrapper-2');
	let sectionsSelector1 = document.querySelectorAll('.project-wrapper-1');
	const sections = document.querySelectorAll('.page-section-pinned');
	const subSections = document.querySelectorAll('.project-sub-section');

	const sectionTitles = ['About Me', 'Projects', 'Learn More', 'Contact Me'];
	// const subSectionTitles = ['MERN', 'ThreeJS'];
	const secArr = [sectionsSelector1, sectionsSelector2];
	// const secOffset = secArr[1][0].offsetWidth * (secArr[1].length - 1);
	// + -secArr[0][0].offsetWidth * (secArr[0].length - 1) * -1;

	const setSectionText = (index) => {
		gsap.set('.section-title', {
			innerText: sectionTitles[index],
		});
		gsap.set('.section-sub-title', {
			innerText: '',
		});
	};

	const setNavSize = (index) => {
		if (window.innerWidth > 500) {
			gsap.to(`.nav-link-${index}`, {
				scale: 1.5,
				duration: 0.5,
				ease: 'power4',
			});
			if (prevNavLink != null && prevNavLink != index) {
				gsap.to(`.nav-link-${prevNavLink}`, {
					scale: 1,
					duration: 0.5,
					ease: 'power4',
				});
			}
			prevNavLink = index;
		}
	};
	const resetNavSize = (index) => {
		gsap.to(`.nav-link-${index}`, {
			scale: 1,
			duration: 0.5,
			ease: 'power4',
		});
	};

	ScrollTrigger.create({
		trigger: '.pin-scrolling-section',
		pin: '.pinned-left-side',
		start: 'top top',
		end: `bottom top`,
		// end: `bottom top`,
		// markers: true,
		pinSpacing: false,
		scrub: true,
	});

	sections.forEach((sec, index) => {
		ScrollTrigger.create({
			trigger: sec,
			// start: 'top center',
			// markers: true,
			// start: 'top top',

			start: 'top-=30% top',
			end: 'bottom center',
			onEnter: () => {
				console.log(index);
				setSectionText(index);
				setNavSize(index);
			},
			onEnterBack: () => {
				console.log(index);

				if (index == sections.length - 1) {
					setSectionText(index - 1);
					setNavSize(index - 1);
				} else {
					setSectionText(index);
					setNavSize(index);
				}
			},
			onLeaveBack: () => {
				if (index == 0) {
					resetNavSize(index);
				}
			},
			// snap: {
			// 	snapTo: 1,
			// 	directional: false,
			// 	duration: 0.5,
			// 	ease: 'power1.inOut',
			// 	delay: 0.1,
			// },
		});
	});
};
