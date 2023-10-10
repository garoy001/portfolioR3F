import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const Projects = () => {
	gsap.registerPlugin(ScrollTrigger);

	return (
		<>
			<div className="page-section projects-section-wrapper">
				<div id="project-section" className="slide section">
					<div className="left-side">
						<div className="title-wrapper">
							<h1 className="title ">Projects</h1>
						</div>
					</div>
					<div className="right-side" style={{ minHeight: '100vh' }}></div>
				</div>
			</div>
		</>
	);
};
