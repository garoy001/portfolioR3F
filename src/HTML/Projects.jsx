import { Canvas } from '@react-three/fiber';
import { Mirrors } from '/ThreeJS/Mirrors/Mirrors.jsx';
import { Environment, Loader } from '@react-three/drei';
import { Perf } from 'r3f-perf';
export const Projects = () => {
	return (
		<>
			<div className="project-section-wrapper page-section">
				<div id="project-section" className="slide section">
					<Loader />
					<Canvas
						dpr={[1, 2]}
						camera={{
							fov: 45,
							position: [0, 15, 0],
							rotation: [Math.PI * 1.5, 0, Math.PI],
						}}
						className="canvas-wrapper"
					>
						<Perf position="top-left" />
						<color attach="background" args={['black']} />

						<Mirrors />
						<Environment preset="city" />
					</Canvas>
				</div>
			</div>
		</>
	);
};
