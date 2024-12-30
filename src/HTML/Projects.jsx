import { ProjectShow } from './project-show';
// import { ProjectData } from '/projects.js';
export const Projects = () => {
	return (
		<>
			<div className="page-section projects-section-wrapper page-section-pinned">
				<div id="project-section" className="slide section">
					<div className="anim-container project-sub-section anim-container-1">
						<div className="left-side">
							<div className="title-wrapper"></div>
						</div>
						<div className="right-side">
							<ProjectShow />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
