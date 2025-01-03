// import { useNavigate } from 'react-router';
import { linkedinIco, githubIco } from '../Data/projectList';
import { IoMdPaper } from 'react-icons/io';
export const LinkSection = () => {
	const openPdf = () => {
		window.open('/Docs/GabrielRoyceResume.pdf');
	};
	return (
		<div className="page-section link-section-wrapper page-section-pinned">
			<div id="link-section" className="slide section">
				<div className="anim-container">
					{/* <div className="left-side pinned-left-side">
						<div className="title-wrapper title-wrap-override">
							<div className="title-holder">
								<h1 className="title section-title">Learn More</h1>
								<h1 className="sub-title section-sub-title"></h1>
							</div>
						</div>
					</div> */}
					<div className="left-side">
						<div className="title-wrapper"></div>
					</div>
					<div className="right-side">
						<div className="link-container">
							<a
								className="link link-1 narrow-link"
								rel="noopener noreferrer"
								target="_blank"
								href="https://github.com/garoy001"
							>
								<div className="link-wrapper">
									<div className="link-name">Github</div>
									<div className="link-icon">
										<img
											src={githubIco}
											alt=""
											style={{ filter: 'invert(100%)' }}
										/>
									</div>
								</div>
							</a>
							<div className="link link-2 narrow-link">
								<div className="link-wrapper">
									<div className="link-name">LinkedIn</div>
									<div className="link-icon">
										<img src={linkedinIco} alt="" />
									</div>
								</div>
							</div>
							<div className="link link-3 wide-link" onClick={openPdf}>
								<div className="link-wrapper">
									<div className="link-name">Resume</div>
									<div className="link-icon">
										<IoMdPaper />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
