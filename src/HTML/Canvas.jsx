import { Canvas } from '@react-three/fiber';
import { Mirrors } from '/ThreeJS/Mirrors/Mirrors.jsx';
import { Environment, Loader } from '@react-three/drei';
import { Perf } from 'r3f-perf';
export const CanvasOverlay = () => {
	return (
		<>
			<div className="canvas-overlay">
				<Loader />
				<Canvas
					dpr={[1, 2]}
					camera={{
						fov: 45,
						position: [0, 0, 6],
						// rotation: [Math.PI * 1.5, 0, Math.PI],
					}}
					// gl={(alpha = true)}
					className="canvas-wrapper"
				>
					{/* <Perf position="top-right" /> */}
					{/* <color attach="background" args={['transparent']} /> */}

					<Mirrors />
					<Environment preset="city" />
				</Canvas>
			</div>
		</>
	);
};
