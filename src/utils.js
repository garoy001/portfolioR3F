export const getDeviceType = () => {
	let deviceType = 'desktop';
	// console.log(navigator.userAgent);
	if (
		navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {
		deviceType = 'mobile';
		// window.alert(window.devicePixelRatio);
	}
	// console.log(deviceType);
	return deviceType;
};
export const getBreakPoint = () => {
	let breakPoint = '';
	const width = window.innerWidth;
	if (width < 768) {
		breakPoint = 'mobile';
	}
	if (width >= 768 && width < 1024) {
		breakPoint = 'tablet';
	}
	if (width >= 1024 && width < 1440) {
		breakPoint = 'laptop';
	}
	if (width >= 1440) {
		breakPoint = 'desktop';
	}
	return breakPoint;
};
//412 x 753 // 2.625

export const checkIntersects = (camera, scene) => {
	rayCaster.set(new THREE.Vector3(0, 0, 0), camera.position);
	const intersects = rayCaster.intersectObject(scene);
	if (intersects[0].object != undefined) {
		setPrevIntersect(currentIntersect);
		setCurrentIntersect(intersects[0].object.children[2]);
		// console.log('prev');
		// console.log(prevIntersect);
		// console.log('current');
		// console.log(currentIntersect);
		console.log(intersects[0].object.children[2].children[0].className);

		// console.log(intersects);
		// console.log(intersects[0].object.children[2]);
	}
};
