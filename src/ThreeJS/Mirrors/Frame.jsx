import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { TfiArrowCircleUp } from 'react-icons/tfi';
import { Image, Text, Html } from '@react-three/drei';
import { gsap } from 'gsap';
import { getBreakPoint, getDeviceType } from '/utils';
const GOLDENRATIO = 1.61803398875;

export const Frame = ({
	img,
	name,
	description,
	dependencies,
	c = new THREE.Color(),
	angle,
	radius,
	...props
}) => {
	// const breakPoint = getBreakPoint();
	const deviceType = getDeviceType();
	const image = useRef();
	const frame = useRef();
	const textRef = useRef();
	const htmlRef = useRef();
	const [toggle, setToggle] = useState(false);
	const groupRef = useRef();
	const frameBox = useMemo(() => {
		const geometry = new THREE.BoxGeometry(1.25, 2, 0.05);
		const material = new THREE.MeshStandardMaterial({
			color: '#151515',
			metalness: 0.5,
			roughness: 0.5,
			envMapIntensity: 2,
		});
		return { geometry, material };
	}, []);
	const frameBox2 = useMemo(() => {
		const geometry = new THREE.BoxGeometry(1.1, 1.9, 0.051);
		const material = new THREE.MeshBasicMaterial({
			toneMapped: false,
			fog: false,
		});
		return { geometry, material };
	}, []);
	// const textMaterial = useMemo(() => {
	// 	const material = new THREE.MeshStandardMaterial({
	// 		color: '#fff',
	// 		emissive: '#fff',
	// 		emissiveIntensity: 2,
	// 		toneMapped: false,
	// 	});
	// 	return material;
	// });
	const [rnd] = useState(() => Math.random());

	const onArrowClick = (e) => {
		const arrow1 = e.target.childNodes[0];
		const arrowContainer = e.target;
		const content = e.target.parentNode.children[1];
		if (toggle) {
			gsap.to(content, { top: '120%', duration: 1 });
			gsap.to(arrowContainer, {
				top: '80%',
				duration: 0.9,
				ease: 'power2.out',
			});
			gsap.to(arrow1, { css: { rotationZ: '0deg' }, duration: 1 });

			setToggle(false);
		}
		if (!toggle) {
			if (deviceType == 'desktop') {
				gsap.to(content, { top: '0%%', duration: 1 });
			}
			if (deviceType != 'desktop') {
				gsap.to(content, { top: '0%', duration: 1 });
			}
			gsap.to(arrowContainer, {
				top: '3.5%',
				duration: 1.25,
				ease: 'power2.out',
			});
			gsap.to(arrow1, { css: { rotationZ: '180deg' }, duration: 1 });

			setToggle(true);
		}
	};

	useFrame((state, dt) => {
		image.current.material.zoom =
			2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
	});
	useEffect(() => {
		const vecPos = new THREE.Vector3(
			Math.sin(angle) * (radius + 4),
			1.2,
			Math.cos(angle) * (radius + 4)
		);
		groupRef.current.children.forEach((e) => {
			e.lookAt(vecPos);
		});
	}, []);
	return (
		<>
			<group {...props} ref={groupRef}>
				<mesh
					name={name}
					// scale={[1, GOLDENRATIO, 0.05]}
					position={[0, 1.2, 0]}
					geometry={frameBox.geometry}
					material={frameBox.material}
				>
					<mesh
						ref={frame}
						raycast={() => null}
						// scale={[0.9, 0.93, 0.9]}
						position={[0, 0, 0.001]}
						geometry={frameBox2.geometry}
						material={frameBox2.material}
					></mesh>
					<Image
						raycast={() => null}
						ref={image}
						position={[0, 0, 0.055]}
						scale={[1.05, 1.85, 1]}
						url={img}
					/>
					<group ref={htmlRef}>
						<Html
							className="canvas-mirror-html"
							wrapperClass="canvas-mirror-html-wrapper"
							transform
							center
							occlude
							distanceFactor={1}
							position={[0, -0.017, 0.056]}
							// rotation={[Math.PI / 10.75, 0, 0]}
							// scale={1}
						>
							<div>
								<div className="html-content">
									<div className="button-section" onClick={onArrowClick}>
										<TfiArrowCircleUp />
									</div>
									<div className="content-section">
										<div className="content-wrapper">
											<p className="description">{description.short}</p>

											<div className="links">
												<a>Github</a>
												<a>Live</a>
											</div>
											<div className="tech-ico">
												{dependencies.map((e, k) => {
													return <p key={k}>{` ${e} |`}</p>;
												})}
											</div>
										</div>
									</div>
								</div>
							</div>
						</Html>
					</group>
					<Text
						maxWidth={1}
						position={[0, 1.1, 0]}
						fontSize={0.125}
						ref={textRef}
					>
						{name}
					</Text>
				</mesh>
			</group>
		</>
	);
};
