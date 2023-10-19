import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const Tech = () => {
	gsap.registerPlugin(ScrollTrigger);

	return (
		<>
			<div className="page-section tech-section-wrapper page-section-pinned">
				<div id="tech-section" className="slide section">
					<div className="anim-container">
						<div className="left-side">
							<div className="title-wrapper"></div>
						</div>
						<div className="right-side">
							<div className="text-anim-box pin-me"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
