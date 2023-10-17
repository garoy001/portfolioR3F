import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
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
import { useGLTF } from '@react-three/drei';
// import { checkIntersects } from '../../utils';
let Checker = 1;
let counter = 0;
let stateObj;
let camera;
let arrow;
let currentIntersect;
let prevIntersect;
export const Frames = ({}) => {
	const images = useMemo(() => {
		return ProjectData;
	});
	const { nodes, materials } = useGLTF('/Models/sphere.glb');
	const timeline = gsap.timeline({ repeat: -1 });
	const sphereRef = useRef();
	let arrowWrapper = null;
	const breakPoint = getBreakPoint();
	const deviceType = getDeviceType();
	const [locked, setLocked] = useState(false);
	const [locked2, setLocked2] = useState(false);
	const rotatingRef = useRef();
	const textRef3d = useRef();
	const groupRef = useRef();
	const ref = useRef();
	const lineRef = useRef();
	const rayCaster = new THREE.Raycaster();
	// rayCaster.layers.set(3);
	const htmlRef = useRef();
	const floorRef = useRef();
	const tlLeft = gsap.timeline({
		onStart: () => {
			setLocked(true);
		},
		onComplete: () => {
			setLocked(false);
			setLocked2(false);
			checkIntersects(stateObj.camera, stateObj.scene, rayCaster);
		},
	});
	const tlRight = gsap.timeline({
		onStart: () => {
			setLocked(true);
		},
		onComplete: () => {
			setLocked(false);
			setLocked2(false);
			checkIntersects(stateObj.camera, stateObj.scene, rayCaster);
		},
	});
	tlLeft.pause();
	tlRight.pause();
	const rotateLeft = () => {
		if (!locked) {
			counter += 1;
			tlLeft.play();
			tlLeft.to(rotatingRef.current.rotation, {
				y: (Math.PI / images.length) * 2 * counter,
				duration: 1,
			});
		}
	};
	const rotateRight = () => {
		if (!locked) {
			counter -= 1;
			tlRight.play();
			tlRight.to(rotatingRef.current.rotation, {
				y: (Math.PI / images.length) * 2 * counter,
				duration: 1,
			});
		}
	};
	const material = new THREE.LineBasicMaterial({
		color: 0x0000ff,
	});
	const renderedImages = useMemo(() => {
		return (
			<>
				{images.map((props, k) => (
					<Frame key={k} {...props} />
				))}
			</>
		);
	}, []);
	let geometry;
	const floorGeometry = useMemo(() => {
		return new THREE.PlaneGeometry(10.5, 10.5);
	}, []);

	const { gl, camera, scene } = useThree();
	const checkIntersects = (camera, scene) => {
		setLocked2(true);
		const tl = gsap.timeline({
			onStart: () => {
				setLocked2(true);
			},
		});
		setLocked2(true);
		const pos = camera.position.y;
		const rayPos = new THREE.Vector3(0, pos, 0);
		const rayEndPos = new THREE.Vector3(0, 0, camera.position.z);
		rayCaster.set(rayPos, rayEndPos);
		console.log(rayCaster);
		const intersects = rayCaster.intersectObject(scene);
		console.log(intersects);
		if (intersects[0] != undefined) {
			const interObj = intersects[0].object.children[2];
			console.log(interObj);
			if (interObj.name != null) {
				currentIntersect = interObj.name;
			}

			if (currentIntersect != prevIntersect && prevIntersect != null) {
				prevIntersect = currentIntersect;
			}

			const htmlSelector = `.${currentIntersect}`;
			const prevHtmlSelector = `${prevIntersect}`;
			console.log(htmlSelector);
			let htmlItem = document.querySelector(`${htmlSelector}`);
			console.log(document.querySelector('.html-selector-drei000001'));
			let prevHtmlItem = document.querySelector(prevHtmlSelector);

			console.log(prevHtmlItem);
			// console.log(htmlItem);
			// htmlItem = htmlItem[0];
			console.log(htmlItem);
			// console.log(prevHtmlItem);
			if (prevHtmlItem != null) {
				gsap.fromTo(
					prevHtmlItem,
					{ opacity: 1 },
					{ opacity: 0, duration: 0.25, ease: 'power4' }
				);
			}
			tl.fromTo(
				htmlItem,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5, ease: 'power4' }
			);

			// console.log('madeit');
		}
	};

	useEffect(() => {
		Checker = 0;
		console.log(document.querySelector('.html-selector-drei000001'));
		const i = document.querySelector('.html-selector-drei000001');
		gsap.fromTo(
			i,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.5, ease: 'power4' }
		);

		checkIntersects(camera, scene);
	});

	// setClicked(true);
	useFrame((state, dt) => {
		const arrowWrap = document.querySelector('.arrow-wrap');
		// console.log(locked2);
		// console.log(window.newObj);

		// console.log(window.newObj);
		if (window.newObj >= 0.9) {
			gsap.to(arrowWrap, { opacity: 1, duration: 1 });
		}
		if (window.newObj < 0.9) {
			gsap.to(arrowWrap, { opacity: 0, duration: 1 });
		}
		// console.log(state.camera.position);
		stateObj = state;
	});

	return (
		<group ref={ref} position={[0, -2.25, 0]} name="frames-grp">
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
					<group ref={rotatingRef} name="rotating-ref-container">
						<group ref={groupRef} name="rendered-images">
							{renderedImages}
						</group>
					</group>
				</>
			</>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Sphere.geometry}
				material={materials['360']}
				position={[0, 1.272, 20]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={5.369}
				ref={sphereRef}
			/>
			<group position={[0, 1.2, 0]}>
				<mesh
					rotation={[-Math.PI / 2, 0, 0]}
					geometry={floorGeometry}
					ref={floorRef}
				>
					<MeshReflectorMaterial
						blur={[300, 100]}
						resolution={2048}
						mixBlur={1}
						mixStrength={80}
						roughness={1}
						// depthScale={1.2}
						depthWrite={false}
						side={THREE.DoubleSide}
						minDepthThreshold={0.4}
						maxDepthThreshold={1.4}
						color="#050505"
						// opacity={0}
						transparent
						metalness={0.5}
					/>
				</mesh>
			</group>
		</group>
	);
};
