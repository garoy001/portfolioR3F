import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { ProjectData } from '/projects.js';
export const Projects = () => {
	gsap.registerPlugin(ScrollTrigger);
	console.log;
	useEffect(() => {
		const projectTotalWrapper = document.querySelector('.projects-wrapper-1');
		const projectTotalWrapper2 = document.querySelector('.projects-wrapper-2');

		const rightSide = document.getElementsByClassName('right-side-p')[0];

		let sections = document.querySelectorAll('.project-wrapper-1');
		let sections2 = document.querySelectorAll('.project-wrapper-2');

		sections.forEach((e) => {
			e.style.minWidth = `${rightSide.offsetWidth}px`;
			e.style.width = `${rightSide.offsetWidth}px`;
			console.log(e.style.width);
		});
		sections2.forEach((e) => {
			e.style.minWidth = `${rightSide.offsetWidth}px`;
			e.style.width = `${rightSide.offsetWidth}px`;
			console.log(e.style.width);
		});

		projectTotalWrapper.style.width =
			sections2.length * sections2[0].offsetWidth;
		projectTotalWrapper2.style.width =
			sections2.length * sections2[0].offsetWidth;
		console.log(sections[0].offsetWidth);

		const getScrollAmount = () => {
			let scrollWidth = projectTotalWrapper.scrollWidth;

			return -sections[0].offsetWidth * (sections.length - 1);
		};
		const getScrollAmount2 = () => {
			let scrollWidth = projectTotalWrapper2.scrollWidth;

			return -sections2[0].offsetWidth * (sections2.length - 1);
		};

		const tween = gsap.to(projectTotalWrapper, {
			x: getScrollAmount,
			duration: 3,
			ease: 'none',
		});
		const tween2 = gsap.to(projectTotalWrapper2, {
			x: getScrollAmount2,
			duration: 3,
			ease: 'none',
		});
		const projAppear = ScrollTrigger.create({
			trigger: '#project-section',
			start: 'top-=50px top',
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
			// onLeave: () => {
			// 	gsap.fromTo(
			// 		'#project-section',
			// 		{ opacity: 1 },
			// 		{ opacity: 0, duration: 0.5 }
			// 	);
			// },
			onLeaveBack: () => {
				gsap.fromTo(
					'#project-section',
					{ opacity: 1 },
					{ opacity: 0, duration: 0.5 }
				);
			},

			scrub: true,
		});
		ScrollTrigger.create({
			trigger: '.anim-container-1',
			start: 'top top',
			end: () => `+=${-sections[0].offsetWidth * (sections.length - 2) * -1}`,
			pin: true,
			pinSpacing: true,
			animation: tween,
			scrub: true,
			invalidateOnRefresh: true,

			snap: {
				snapTo: 1 / (sections.length - 1),
				directional: false,
				duration: 0.5,
				ease: 'power1.inOut',
			},
		});

		ScrollTrigger.create({
			trigger: '.anim-container-2',
			start: 'top top',
			end: () => `+=${-sections2[0].offsetWidth * (sections2.length - 2) * -1}`,
			pin: true,
			pinSpacing: true,
			animation: tween2,
			scrub: true,
			invalidateOnRefresh: true,

			snap: {
				snapTo: 1 / (sections2.length - 1),
				directional: false,
				duration: 0.5,
				ease: 'power1.inOut',
			},
		});
	}, []);

	return (
		<>
			<div className="page-section projects-section-wrapper page-section-pinned">
				<div id="project-section" className="slide section">
					<div className="anim-container project-sub-section anim-container-1">
						<div className="left-side">
							<div className="title-wrapper"></div>
						</div>
						<div className="right-side right-side-p">
							<div className="projects-wrapper-1 projects-wrapper">
								{ProjectData.map((e, k) => {
									return (
										<>
											<div
												className="project-wrapper project-wrapper-1"
												key={`${k + e.name}`}
											>
												<div className="project-left-side">
													<div className="project-title">
														<h1>{e.name}</h1>
													</div>
													<div className="project-image">
														<div
															className="project-image-container"
															style={{ backgroundImage: `url("${e.img}")` }}
														></div>
													</div>
												</div>
												<div className="project-right-side">
													<div className="project-right-side-wrapper">
														<div className="project-description">
															<p>{e.description.short}</p>
														</div>
														<div className="project-technologies">
															{e.dependencies.map((i, j) => {
																return (
																	<p key={`${j + i}`}>{` ${i} |`}&nbsp;</p>
																);
															})}
														</div>
														<div className="project-links">
															<a
																href={e.links.github.frontEnd}
																rel="noopener noreferrer"
																target={'_blank'}
															>
																<p>Github</p>
															</a>
															<a
																href={e.links.deployed}
																rel="noopener noreferrer"
																target={'_blank'}
															>
																<p>Live</p>
															</a>
														</div>
													</div>
												</div>
											</div>
										</>
									);
								})}
							</div>
						</div>
					</div>
					<div className="anim-container project-sub-section anim-container-2">
						<div className="left-side">
							<div className="title-wrapper"></div>
						</div>
						<div className="right-side right-side-3">
							<div className="projects-wrapper-2 projects-wrapper">
								{ProjectData.map((e, k) => {
									return (
										<>
											<div
												className="project-wrapper-2 project-wrapper"
												key={`${k + e.name}`}
											>
												<div className="project-left-side">
													<div className="project-title">
														<h1>{e.name}</h1>
													</div>
													<div className="project-image">
														<div
															className="project-image-container"
															style={{ backgroundImage: `url("${e.img}")` }}
														></div>
													</div>
												</div>
												<div className="project-right-side">
													<div className="project-right-side-wrapper">
														<div className="project-description">
															<p>{e.description.short}</p>
														</div>
														<div className="project-technologies">
															{e.dependencies.map((i, j) => {
																return (
																	<p key={`${j + i}`}>{` ${i} |`}&nbsp;</p>
																);
															})}
														</div>
														<div className="project-links">
															<a
																href={e.links.github.frontEnd}
																rel="noopener noreferrer"
																target={'_blank'}
															>
																<p>Github</p>
															</a>
															<a
																href={e.links.deployed}
																rel="noopener noreferrer"
																target={'_blank'}
															>
																<p>Live</p>
															</a>
														</div>
													</div>
												</div>
											</div>
										</>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
