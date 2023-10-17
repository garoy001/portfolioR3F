import * as THREE from 'three';
import gsap from 'gsap';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
const params = {};
params.count = 2000;
params.color = new THREE.Color('#ffffff');
params.size = 0.15;
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};
export const Backdrop = () => {
	const particleRef = useRef();
	const groupRef = useRef();
	const wholePage = document.body;
	const height = wholePage.offsetHeight;
	const width = wholePage.offsetWidth;
	const particleTexture = useTexture('/Models/star_02.png');
	const objectsDistance = 4;
	const currentPos = new THREE.Vector3(0, 0, 0);

	const parameters = {
		materialColor: '#ffeded',
	};
	const cursor = {};

	window.addEventListener('mousemove', (e) => {
		if (e.clientX && height) cursor.x = (e.clientX / height - 0.5).toFixed(2);
		if (e.clientY && width) cursor.y = (e.clientY / width - 0.5).toFixed(2);
	});

	const particleGeometry = useMemo(() => {
		const positions = new Float32Array(params.count * 3);
		for (let i = 0; i < params.count; i++) {
			positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
			positions[i * 3 + 1] =
				objectsDistance * 0.5 - Math.random() * objectsDistance;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
		}
		const particleGeometry = new THREE.BufferGeometry();
		particleGeometry.setAttribute(
			'position',
			new THREE.BufferAttribute(positions, 3)
		);
		return particleGeometry;
	}, [params, objectsDistance]);

	const particleMaterial = new THREE.PointsMaterial({
		size: params.size,
		sizeAttenuation: true,
		color: parameters.materialColor,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		transparent: true,
		alphaMap: particleTexture,
	});

	useFrame((state, dt) => {
		const parallaxX = cursor.x * 0.5;
		const parallaxY = -cursor.y * 0.5;

		console.log(state.scene);

		particleRef.current.position.x +=
			(parallaxX - particleRef.current.position.x) * 5 * dt;
		particleRef.current.position.y +=
			(parallaxY - particleRef.current.position.y) * 50 * dt;
		particleRef.current.rotation.x += dt * 0.002;
		particleRef.current.rotation.y += dt * 0.002;
	});
	return (
		<>
			<group ref={groupRef}>
				<points
					geometry={particleGeometry}
					material={particleMaterial}
					ref={particleRef}
				/>
			</group>
		</>
	);
};
