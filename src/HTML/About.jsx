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
										Beginning with HTML, CSS, and JavaScript, I quickly fell in
										love with programming as a child.
									</div>
								</div>
								<div className="text-wrapper text-reveal">
									{' '}
									<div className="text text-2">
										As time went on I learned and worked with Python, C#, Java,
										and various libraries and frameworks constantly seeking to
										improve my knowledge and skills as not just a developer, but
										a problem-solver.
									</div>
								</div>
								<div className="text-wrapper text-reveal">
									{' '}
									<div className="text text-3">
										Today, as a creative developer, I believe that unique
										web-based interactions are the best way to engage with
										users, and can provide unique solutions to clients.
									</div>
								</div>
								<div className="text-wrapper text-reveal">
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
