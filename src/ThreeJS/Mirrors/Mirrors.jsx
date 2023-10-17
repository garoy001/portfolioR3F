import { Frames } from './Frames';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree, extend } from '@react-three/fiber';
import { useGLTF, Loader, shaderMaterial, useTexture } from '@react-three/drei';

import vertexShader from '/ThreeJS/Shaders/test/vertex.glsl';
import fragmentShader from '/ThreeJS/Shaders/test/fragment.glsl';
export const Mirrors = () => {
	const groupRef = useRef();
	const { camera } = useThree();
	const mat = useRef();
	const wholePage = document.body;
	const height = wholePage.offsetHeight;
	let scrollY = wholePage.scrollHeight;
	const objectDistance = 4;
	let pos = -1 * window.newObj * objectDistance * 3;
	const { nodes, materials } = useGLTF('/Models/sphere.glb');
	const sphereRef = useRef();
	// console.log(nodes);
	const sphr = new THREE.SphereGeometry(15, 32, 16);
	const vert = [];
	// for ( let i = 0; i< nodes.Sphere.geometry)
	// function createPoints(geom) {
	// 	var material = new THREE.PointsMaterial({
	// 		color: 0x000000,
	// 		size: 2,
	// 		transparent: true,
	// 		blending: THREE.AdditiveBlending,
	// 		map: generateSprite(),
	// 		depthWrite: false, // instead of sortParticles
	// 	});

	// 	var cloud = new THREE.Points(geom, material);
	// 	return cloud;
	// }
	// const convGeo = createPoints(nodes.Sphere.geometry);
	useEffect(() => {
		groupRef.current.position.y = -objectDistance * 2;
		camera.position.y = pos;
	}, []);
	useFrame((state, dt, delta) => {
		scrollY = wholePage.scrollHeight;
		// pos = -1 * window.newObj * objectDistance * 3;
		const lookPos = new THREE.Vector3(0, state.camera.position.y, 0);
		// state.camera.lookAt(lookPos);
		// console.log(dt);
		// state.camera.position.y = pos;
		sphereRef.current.rotation.y += dt;
	});
	return (
		<>
			<group ref={groupRef}>{/* <Frames /> */}</group>
			<mesh
				castShadow
				receiveShadow
				geometry={convGeo.geometry}
				material={convGeo.material}
				position={[0, 1.272, -20]}
				rotation={[0, Math.PI, 0]}
				scale={10.369}
				ref={sphereRef}
			></mesh>
		</>
	);
};
