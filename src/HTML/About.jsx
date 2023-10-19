import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
const sectionTitles = ['About Me', 'Projects', 'Contact Me'];
const subSectionTitles = ['MERN', 'ThreeJS'];
export const About = () => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		let sectionsSelector2 = document.querySelectorAll('.project-wrapper-2');
		let sectionsSelector1 = document.querySelectorAll('.project-wrapper-1');
		const secArr = [sectionsSelector1, sectionsSelector2];
		const sections = document.querySelectorAll('.page-section-pinned');
		const subSections = document.querySelectorAll('.project-sub-section');
		const secOffset =
			-secArr[1][0].offsetWidth * (secArr[1].length - 1) * -1 +
			-secArr[0][0].offsetWidth * (secArr[0].length - 1) * -1;
		ScrollTrigger.create({
			trigger: '.pin-scrolling-section',

			pin: '.pinned-left-side',
			start: 'top top',
			end: `bottom+=${secOffset} top`,
			// markers: true,
			scrub: true,
		});

		const setSectionText = (index) => {
			gsap.set('.section-title', {
				innerText: sectionTitles[index],
			});
			gsap.set('.section-sub-title', {
				innerText: '',
			});
		};
		const setSubSectionText = (index) => {
			gsap.set('.section-sub-title', {
				innerText: subSectionTitles[index],
			});
		};
		sections.forEach((sec, index) => {
			ScrollTrigger.create({
				trigger: sec,
				// start: 'top center',
				markers: true,
				start: () => {
					if (index == sections.length - 1) {
						return `top+=${secOffset} center`;
					} else {
						return 'top center';
					}
				},
				end: `bottom center`,
				onEnter: () => {
					console.log(index);

					setSectionText(index);
				},
				onEnterBack: () => {
					console.log(index);
					if (index == 2) {
						setSectionText(index - 1);
					} else {
						setSectionText(index);
					}
				},
			});
		});
		subSections.forEach((sec, index) => {
			ScrollTrigger.create({
				trigger: sec,
				start: () => {
					if (index == 0) {
						return 'top center';
					} else if (index == 1) {
						return `+=${
							-secArr[0][0].offsetWidth * (secArr[index].length - 2) * -1
						}`;
					}
				},

				end: () => {
					return `+=${
						-secArr[index][0].offsetWidth * (secArr[index].length - 2) * -1
					}`;
				},

				onEnter: () => {
					setSubSectionText(index);
				},
				onEnterBack: () => {
					setSubSectionText(index);
				},
			});
		});
	});
	useEffect(() => {
		const widthL = document.querySelector('.left-side');
		const widthR = document.querySelector('.right-side');
		console.log(widthL.style.width);
	});
	return (
		<>
			<div className="page-section about-section-wrapper page-section-pinned">
				<div id="about-section" className="slide section">
					<div className="anim-container">
						<div className="left-side pinned-left-side">
							<div className="title-wrapper title-wrap-override">
								<div className="title-holder">
									<h1 className="title section-title">About Me</h1>
									<h1 className="sub-title section-sub-title"></h1>
								</div>
							</div>
						</div>
						<div className="right-side">
							<div className="text-anim-box pin-me">
								<h2 className="sub-title pin-me">Hello World.</h2>
								<div className="text-wrapper">
									<div className="text text-1">
										Beginning with HTML, CSS, and JavaScript, I quickly fell in
										love with programming as a child.
									</div>
								</div>
								<div className="text-wrapper">
									{' '}
									<div className="text text-2">
										As time went on I learned and worked with Python, C#, Java,
										and various libraries and frameworks constantly seeking to
										improve my knowledge and skills as not just a developer, but
										a problem-solver.
									</div>
								</div>
								<div className="text-wrapper">
									{' '}
									<div className="text text-3">
										Today, as a creative developer, I believe that unique
										web-based interactions are the best way to engage with
										users, and can provide unique solutions to clients.
									</div>
								</div>
								<div className="text-wrapper">
									<div className="text text-4">
										Tomorrow, I hope to have learned something new, to grow as a
										developer, to solve a problem.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
