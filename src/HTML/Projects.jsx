import { ProjectData } from '/projects.js';
export const Projects = () => {
	return (
		<>
			<div className="page-section projects-section-wrapper page-section-pinned">
				<div id="project-section" className="slide section">
					<div className="anim-container project-sub-section anim-container-1">
						<div className="left-side">
							<div className="title-wrapper"></div>
						</div>
						<div className="right-side right-side-p">
							<div className="projects-wrapper-1 projects-wrapper">
								{ProjectData.map((e, k) => {
									return (
										<>
											<div
												className="project-wrapper project-wrapper-1"
												
												key={`${k + e.name}`}
											>
												<div className="project-left-side">
													<div className="project-title">
														<h1>{e.name}</h1>
													</div>
													<div className="project-image">
														<div
															className="project-image-container"
															style={{ backgroundImage: `url("${e.img}")` }}
														></div>
													</div>
												</div>
												<div className="project-right-side">
													<div className="project-right-side-wrapper">
														<div className="project-description">
															<p>{e.description.short}</p>
														</div>
														<div className="project-technologies">
															{e.dependencies.map((i, j) => {
																return (
																	<p key={`${j + i}`}>{` ${i} |`}&nbsp;</p>
																);
															})}
														</div>
														<div className="project-links">
															<a
																href={e.links.github.frontEnd}
																rel="noopener noreferrer"
																target={'_blank'}
															>
																<p>Github</p>
															</a>
															<a
																href={e.links.deployed}
																rel="noopener noreferrer"
																target={'_blank'}
															>
																<p>Live</p>
															</a>
														</div>
													</div>
												</div>
											</div>
										</>
									);
								})}
							</div>
						</div>
					</div>
					<div className="anim-container project-sub-section anim-container-2">
						<div className="left-side">
							<div className="title-wrapper"></div>
						</div>
						<div className="right-side right-side-3">
							<div className="projects-wrapper-2 projects-wrapper">
								{ProjectData.map((e, k) => {
									return (
										<>
											<div
												className="project-wrapper-2 project-wrapper"
												id={`projectWrap1${k}`}
												key={`${k + e.name}`}
											>
												<div className="project-left-side">
													<div className="project-title">
														<h1>{e.name}</h1>
													</div>
													<div className="project-image">
														<div
															className="project-image-container"
															style={{ backgroundImage: `url("${e.img}")` }}
														></div>
													</div>
												</div>
												<div className="project-right-side">
													<div className="project-right-side-wrapper">
														<div className="project-description">
															<p>{e.description.short}</p>
														</div>
														<div className="project-technologies">
															{e.dependencies.map((i, j) => {
																return (
																	<p key={`${j + i}`}>{` ${i} |`}&nbsp;</p>
																);
															})}
														</div>
														<div className="project-links">
															<a
																href={e.links.github.frontEnd}
																rel="noopener noreferrer"
																target={'_blank'}
															>
																<p>Github</p>
															</a>
															<a
																href={e.links.deployed}
																rel="noopener noreferrer"
																target={'_blank'}
															>
																<p>Live</p>
															</a>
														</div>
													</div>
												</div>
											</div>
										</>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
