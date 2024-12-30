export const About = () => {
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
								<h2 className="sub-title pin-me text-reveal">Hello World.</h2>
								<div className="text-wrapper text-reveal">
									<div className="text text-1">
										In 2020 I began my journey into programming with Python and
										found that it made great use of my love of computers and my
										knack for <span>problem-solving</span>. Since then I've gone
										on to learn C#, Javascript, and many more frameworks and
										libraries.
									</div>
								</div>
								<div className="text-wrapper text-reveal">
									{' '}
									<div className="text text-2">
										My long-term goal is to continue
										<span> learning</span> and <span>mastering</span> both the
										technologies I know and those I'll come to know to find new
										innovative ways to provide software-based solutions. My
										immediate goal is to learn new ways to <span>design</span>{' '}
										and integrate full-stack applications to build my skills in
										full-stack software engineering.
									</div>
								</div>
								<div className="text-wrapper text-reveal">
									{' '}
									<div className="text text-3">
										My current focus is building <span>intuitive</span> websites
										with elegant
										<span> responsiveness</span> using the most current
										frameworks and technologies. Outside of my coding fanaticism
										I'm a huge reader and gamer.
									</div>
								</div>
								<div className="text-wrapper text-reveal">
									<div className="text text-4">
										{/* Tomorrow, I hope to have learned something new, to grow as a
										developer, to solve a problem. */}
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
