import { Canvas, extend } from '@react-three/fiber';
// import { Mirrors } from '/ThreeJS/Mirrors/Mirrors.jsx';
import { Perf } from 'r3f-perf';
import {
	Environment,
	Loader,
	OrbitControls,
	PresentationControls,
	shaderMaterial,
	useTexture,
} from '@react-three/drei';
import { Backdrop } from '../ThreeJS/Models/Backdrop';
import { Suspense } from 'react';

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
					<Suspense>
						<Backdrop />
					</Suspense>

					{/* <OrbitControls /> */}
					<Perf position="top-right" />
					{/* <color attach="background" args={['gray']} /> */}
					<color attach="background" args={['#191920']} />
					{/* <Mirrors /> */}
					{/* <fog attach="fog" args={['#191920', 5, 25]} /> */}

					{/* <Environment preset="city" /> */}
				</Canvas>
			</div>
		</>
	);
};
