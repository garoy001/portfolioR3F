import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { LiaHandPointerSolid } from 'react-icons/lia';
import {
	MeshReflectorMaterial,
	Html,
	PresentationControls,
	Text3D,
} from '@react-three/drei';
import { ProjectData } from '/projects.js';
import { easing } from 'maath';
import { gsap } from 'gsap';
import { getBreakPoint, getDeviceType } from '/utils';
import { Frame } from './Frame';
const images = ProjectData;
let counter = 0;
export const Frames = ({
	q = new THREE.Quaternion(),
	p = new THREE.Vector3(),
}) => {
	const timeline = gsap.timeline({ repeat: -1 });
	let arrowWrapper = null;
	const breakPoint = getBreakPoint();
	const deviceType = getDeviceType();
	const [isClicked, setClicked] = useState(false);
	const rotatingRef = useRef();
	const textRef3d = useRef();
	const groupRef = useRef();
	const ref = useRef();
	const htmlRef = useRef();

	const rotateLeft = () => {
		counter += 1;
		gsap.to(rotatingRef.current.rotation, {
			y: (Math.PI / images.length) * 2 * counter,
			duration: 1,
		});
	};
	const rotateRight = () => {
		counter -= 1;
		gsap.to(rotatingRef.current.rotation, {
			y: (Math.PI / images.length) * 2 * counter,
			duration: 1,
		});
	};

	q.identity();
	const renderedImages = useMemo(() => {
		return (
			<>
				{images.map((props, k) => (
					<Frame key={k} {...props} />
				))}
			</>
		);
	}, []);
	const floorGeometry = useMemo(() => {
		return new THREE.PlaneGeometry(50.5, 50.5);
	}, []);
	// console.log(renderedImages);
	useEffect(() => {
		if (deviceType != 'desktop') {
			textRef3d.current.scale.set(0.8, 0.8, 0.8);
			textRef3d.current.position.set(2.9, 2, -0.5);
		}

		p.set(0, 1.2, 6.25);
	});

	useFrame((state, dt) => {
		if (document.querySelector('.pointer-hand') && !isClicked) {
			const hand = htmlRef.current;

			timeline.to(hand, { scale: '.8', duration: 0.5, delay: 3 });
			timeline.to(hand, { scale: '1', duration: 0.5 });

			timeline.play();
		}

		arrowWrapper = document.querySelector('.arrow-wrap');
		if (isClicked) {
			easing.damp3(state.camera.position, p, 0.4, dt);
			easing.dampQ(state.camera.quaternion, q, 0.4, dt);
			gsap.to(textRef3d.current.position, {
				y: -1,
				duration: 10,
			});
			gsap.to(':root', {
				'--background-color': 'black',
			});

			if (arrowWrapper) {
				gsap.to(arrowWrapper, { opacity: 1, duration: 2, delay: 1 });
			}
		}
	});
	return (
		<group ref={ref} position={[0, -1, 0]}>
			{deviceType == 'desktop' && isClicked && (
				<PresentationControls global polar={[0, 0, 0]} speed={0.75}>
					<group ref={groupRef}>{renderedImages}</group>
				</PresentationControls>
			)}
			{deviceType == 'desktop' && !isClicked && (
				<>
					<group ref={groupRef}>{renderedImages}</group>
				</>
			)}
			{deviceType != 'desktop' && !isClicked && (
				<>
					<group ref={groupRef}>{renderedImages}</group>
				</>
			)}
			{deviceType != 'desktop' && isClicked && (
				<>
					<Html wrapperClass="canvas-arrows-wrapper" className="canvas-arrows">
						<div className="arrow-wrap">
							<div className="arrow-left" onClick={() => rotateLeft()}>
								<BiLeftArrow />
							</div>
							<div className="arrow-right" onClick={() => rotateRight()}>
								<BiRightArrow />
							</div>
						</div>
					</Html>
					<>
						<group ref={rotatingRef}>
							<group ref={groupRef}>{renderedImages}</group>
						</group>
					</>
				</>
			)}
			<group position={[0, 1.2, 0]}>
				<mesh rotation={[-Math.PI / 2, 0, 0]} geometry={floorGeometry}>
					<MeshReflectorMaterial
						blur={[300, 100]}
						resolution={2048}
						mixBlur={1}
						mixStrength={80}
						roughness={1}
						depthScale={1.2}
						minDepthThreshold={0.4}
						maxDepthThreshold={1.4}
						color="#050505"
						metalness={0.5}
					/>
				</mesh>
			</group>
			<group
				position={[3.5, 2, -0.5]}
				rotation={[Math.PI / 2, Math.PI, 0]}
				ref={textRef3d}
			>
				<Text3D
					font="/fonts/montserrat.json"
					fontSize="200"
					size={1}
					height={0.02}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.2}
					bevelSize={0.05}
					bevelOffset={0}
					bevelSegments={5}
				>
					PROJECTS
					<meshStandardMaterial
						color={new THREE.Color('#fff')}
						emissive={new THREE.Color('#fff')}
						emissiveIntensity={2}
						toneMapped={false}
					/>
					{!isClicked && (
						<Html
							className="project-hover"
							wrapperClass="project-hover-wrapper"
							distanceFactor={20}
							// center
							transform
							position={[3.5, 0, 3]}
							// ref={htmlRef}
						>
							<div className="hover-div" onClick={() => setClicked(true)}></div>
							<div className="pointer-hand" ref={htmlRef}>
								<LiaHandPointerSolid />
							</div>
						</Html>
					)}
				</Text3D>
			</group>
		</group>
	);
};
