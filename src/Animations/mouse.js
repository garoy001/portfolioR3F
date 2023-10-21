import gsap from 'gsap';

export const MouseControl = () => {
	let mouse = document.querySelector('.cursor');
	function cursor(e) {
		mouse.style.top = e.pageY + 'px';
		mouse.style.left = e.pageX + 'px';
	}
	function activeCursor(e) {
		console.log(e.target);
		const item = e.target;
		const tween = gsap.to(mouse, { rotation: 360, repeat: -1, delay: 0 });
		document.querySelectorAll('a').forEach((e) => {
			const child = e.childNodes[0];
			if (child.nodeType == 1) {
				child.classList.add('hoverable');
			} else {
				e.classList.add('hoverable');
			}
		});
		if (item.classList.contains('hoverable')) {
			gsap.fromTo(
				mouse,
				{ scale: 1 },
				{ scale: 0.8, duration: 2, ease: 'power4' }
			);
			tween.play();
			mouse.classList.add('hover-active');
		} else {
			// console.log( tween );
			tween.kill();

			mouse.classList.remove('hover-active');
			gsap.to(
				mouse,
				// { scale: 0.8 },
				{ scale: 1, duration: 1, ease: 'power4' }
			);
		}
	}
	window.addEventListener('mousemove', cursor);
	window.addEventListener('mouseover', activeCursor);
};
