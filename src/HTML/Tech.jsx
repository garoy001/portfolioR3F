import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const Tech = () => {
	gsap.registerPlugin(ScrollTrigger);

	return (
		<>
			<div className="page-section tech-section-wrapper">
				<div id="tech-section" className="slide section">
					<div className="left-side">
						<div className="title-wrapper">
							<h1 className="title ">About Me</h1>
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
									improve my knowledge and skills as not just a developer, but a
									problem-solver.
								</div>
							</div>
							<div className="text-wrapper">
								{' '}
								<div className="text text-3">
									Today, as a creative developer, I believe that unique
									web-based interactions are the best way to engage with users,
									and can provide unique solutions to clients.
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
		</>
	);
};
