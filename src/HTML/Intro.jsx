import { useEffect, useRef } from 'react';
import { WordSlideIntro } from '/Animations/wordSlideIntro.js';
export const Intro = () => {
	const nameRef = useRef(null);

	useEffect(() => {
		WordSlideIntro();
		// IntroAnimation();
	});
	return (
		<>
			<div className="intro-section-wrapper page-section">
				<div id="intro-section" className="section">
					<div className="intro-hook-header">
						<div className="intro-line-1 intro-line">Get </div>
						<div className="roulette-wrapper">
							<span className="intro-span-odd word-roulette word-roulette-1 active">
								Creative
							</span>{' '}
							<span className="intro-span-odd word-roulette word-roulette-2">
								the best
							</span>
							<span className="intro-span-odd word-roulette word-roulette-3">
								unique
							</span>
						</div>
						<div className="intro-line-3 intro-line">
							{' '}
							<span className="intro-span-even">solutions</span>{' '}
							<span className="intro-span-even">to</span>
						</div>

						<div className="roulette-wrapper">
							<span className="intro-span-odd word-roulette word-roulette-1 active">
								Unique{' '}
							</span>
							<span className="intro-span-odd word-roulette word-roulette-2 ">
								Your
							</span>
							<span className="intro-span-odd word-roulette word-roulette-3 ">
								creative
							</span>
						</div>
						<div className="intro-line-5 intro-line">
							<span className="intro-span-even">Problems</span>
						</div>
					</div>
					<div id="intro-about-section">
						<span className="intro-name" id="intro-name" ref={nameRef}>
							Gabriel Royce
						</span>

						<div className="job-word-roulette">
							<div className="modal-anim-wrapper">
								<span className="modal-word modal-word-1 active">Creative</span>
								<span className="modal-word modal-word-2">Software</span>
								<span className="modal-word modal-word-3">WebGL</span>{' '}
								<span className="modal-word modal-word-4">Frontend</span>{' '}
							</div>{' '}
							<div className="modal-static-wrapper"> Developer</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
