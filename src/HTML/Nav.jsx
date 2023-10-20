export const Nav = () => {
	return (
		<>
			<div className="nav-wrapper">
				<div className="self-icon"></div>
				<div className="nav-links">
					<div className="nav-link-wrapper nav-link-0">
						<a>About Me</a>
					</div>
					<div className="nav-link-wrapper nav-link-1">
						<a>Projects</a>
					</div>
					<div className="nav-link-wrapper nav-link-2">
						<a>Contact Me</a>
					</div>
				</div>
				<div className="mobile-nav">
					<div className="nav-button">
						<div className="hamburger-line hamburger-line-1"></div>
						<div className="hamburger-line-2 hamburger-line"></div>
						<div className="hamburger-line-3 hamburger-line"></div>
					</div>
					<div className="nav-dropdown"></div>
				</div>
			</div>
		</>
	);
};
