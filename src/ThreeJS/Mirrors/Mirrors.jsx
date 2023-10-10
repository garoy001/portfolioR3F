import { Frames } from './Frames';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
export const Mirrors = () => {
	const groupRef = useRef();
	const { camera } = useThree();
	const wholePage = document.body;
	const height = wholePage.offsetHeight;
	let scrollY = wholePage.scrollHeight;
	const objectDistance = 4;
	let pos = -1 * window.newObj * objectDistance * 3;
	useEffect(() => {
		console.log(height);
		console.log(scrollY);
		console.log(camera);
		groupRef.current.position.y = -objectDistance * 2;
		camera.position.y = pos;
	}, []);
	useFrame((state, dt) => {
		scrollY = wholePage.scrollHeight;
		pos = -1 * window.newObj * objectDistance * 3;
		const lookPos = new THREE.Vector3(0, state.camera.position.y, 0);
		// state.camera.lookAt(lookPos);
		console.log(state.camera)
		state.camera.position.y = pos;
	});
	return (
		<>
			<group ref={groupRef}>
				<Frames />
			</group>
		</>
	);
};
