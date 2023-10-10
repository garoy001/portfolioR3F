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
let Checker = 0;
let counter = 0;
let stateObj;
let camera;
let currentIntersect;
let prevIntersect;
export const Frames = ({
	q = new THREE.Quaternion(),
	p = new THREE.Vector3(),
}) => {
	const images = useMemo(() => {
		return ProjectData;
	});
	const timeline = gsap.timeline({ repeat: -1 });
	let arrowWrapper = null;
	const breakPoint = getBreakPoint();
	const deviceType = getDeviceType();
	const [isClicked, setClicked] = useState(false);
	const [locked, setLocked] = useState(false);
	const rotatingRef = useRef();
	const textRef3d = useRef();
	const groupRef = useRef();
	const ref = useRef();
	const htmlRef = useRef();
	// const [prevIntersect, setPrevIntersect] = useState();
	// const [currentIntersect, setCurrentIntersect] = useState();
	const tlLeft = gsap.timeline({
		onStart: () => {
			setLocked(true);
		},
		onComplete: () => {
			setLocked(false);
			checkIntersects(stateObj.camera, stateObj.scene);
		},
	});
	const tlRight = gsap.timeline({
		onStart: () => {
			setLocked(true);
		},
		onComplete: () => {
			setLocked(false);
			checkIntersects(stateObj.camera, stateObj.scene);
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
	const rayCaster = new THREE.Raycaster();
	const checkIntersects = (camera, scene) => {
		rayCaster.set(new THREE.Vector3(0, 0, 0), camera.position);
		const intersects = rayCaster.intersectObject(scene);
		if (intersects[0].object != undefined) {
			const interObj = intersects[0].object.children[2];
			console.log(interObj);
			prevIntersect = currentIntersect;
			currentIntersect = interObj.name;
			console.log('prev');
			console.log(prevIntersect);
			console.log('current');
			console.log(currentIntersect);
			// console.log(intersects[0].object.children[2]);
			const htmlSelector = `${currentIntersect}`;
			const prevHtmlSelector = `${prevIntersect}`;
			let htmlItem = document.getElementsByClassName(htmlSelector);
			let prevHtmlItem = document.getElementsByClassName(prevHtmlSelector);
			htmlItem = htmlItem[0];
			gsap.fromTo(
				prevHtmlItem,
				{ opacity: 1 },
				{ opacity: 0, duration: 0.25, ease: 'power4' }
			);
			gsap.fromTo(
				htmlItem,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5, ease: 'power4' }
			);
			// console.log(htmlItem.style);

			// console.log(intersects);
			// console.log(intersects[0].object.children[2]);
		}
	};
	useEffect(() => {
		if (deviceType != 'desktop') {
			textRef3d.current.scale.set(0.8, 0.8, 0.8);
			textRef3d.current.position.set(2.9, 2, -0.5);
		}

		p.set(0, 1.2, 6.25);
		if (htmlRef.current) {
			const hand = htmlRef.current;

			timeline.to(hand, { scale: '.8', duration: 0.5, delay: 3 });
			timeline.to(hand, { scale: '1', duration: 0.5 });

			timeline.play();
		}
	});

	useFrame((state, dt) => {
		arrowWrapper = document.querySelector('.arrow-wrap');
		// console.log(rayCaster);
		stateObj = state;
		// console.log(renderedImages.props.children);
		if (isClicked) {
			easing.damp3(state.camera.position, p, 0.4, dt);
			easing.dampQ(state.camera.quaternion, q, 0.4, dt);

			if (state.camera.position.y == 1.2 && Checker === 0) {
				checkIntersects(state.camera, state.scene);
				Checker++;
			}
			// console.log(intersects);
			// console.log(rayCaster.intersectObjects(renderedImages.props.children));
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
		<group ref={ref} position={[0, -1, 0]} name="frames-grp">
			{deviceType == 'desktop' && !isClicked && (
				<>
					<group ref={groupRef} name="rendered-images">
						{renderedImages}
					</group>
				</>
			)}
			{deviceType != 'desktop' && !isClicked && (
				<>
					<group ref={groupRef} name="rendered-images">
						{renderedImages}
					</group>
				</>
			)}
			{isClicked && (
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
