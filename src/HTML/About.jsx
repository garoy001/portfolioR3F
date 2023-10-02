import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const About = () => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		let textFrames = gsap.utils.toArray('.text-wrapper');

		gsap.defaults({ overwrite: 'auto' });

		gsap.set('.pin-me > *', { xPercent: -50, yPercent: -50 });

		// Set up our scroll trigger
		const ST = ScrollTrigger.create({
			trigger: '.about-anim-container',
			start: 'top top',
			end: 'bottom bottom',
			// onUpdate: getCurrentSection,
			pin: '.title',
			pinSpacing: false,
		});
		const ST2 = ScrollTrigger.create({
			trigger: '.about-anim-container',
			start: 'top top',
			end: 'bottom bottom',
			// onUpdate: getCurrentSection,
			pin: '.sub-title',
			pinSpacing: false,
		});
	});
	return (
		<>
			<div className="page-section about-section-wrapper">
				<div id="about-section" className="slide section">
					<div className="about-anim-container">
						<div className="about-frame frame-1">
							<div className="about-frame-wrapper">
								<div className="about-anim-wrapper">
									<div className="title-wrapper ">
										<h1 className="title pin-me">About Me</h1>
									</div>
								</div>
							</div>
							<div className="about-frame-wrapper">
								<div className="about-anim-wrapper text-anim-wrapper">
									<div className="text-container">
										<h2 className="sub-title pin-me">Hello World.</h2>
										<div className="text-anim-box pin-me">
											<div className="text-wrapper">
												<div className="text text-1">
													Beginning with HTML, CSS, and JavaScript, I quickly
													fell in love with programming as a child.
												</div>
											</div>
											<div className="text-wrapper">
												{' '}
												<div className="text text-2">
													As time went on I learned and worked with Python, C#,
													Java, and various libraries and frameworks constantly
													seeking to improve my knowledge and skills as not just
													a developer, but a problem-solver.
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
													Tomorrow, I hope to have learned something new, to
													grow as a developer, to solve a problem.
												</div>
											</div>
										</div>
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
