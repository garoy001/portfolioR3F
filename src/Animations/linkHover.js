import gsap from 'gsap';

export const LinkHover = () => {
	let link = document.querySelectorAll('.link');
	let linkNames = document.querySelectorAll('.link-name');
	let linkIcons = document.querySelectorAll('.link-icon');
	const enterLink = (e) => {
		console.log('entered');
		// console.log(e.target);
		const linkName = e.target.childNodes[0].childNodes[0];
		const linkIcon = e.target.childNodes[0].childNodes[1];
		const t1 = gsap.timeline();
		// console.log(linkName);
		// console.log(linkIcon);
		gsap.fromTo(
			linkIcon,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.5, ease: 'power4', delay: 0.2 }
		);
		gsap.fromTo(
			linkName,
			{ opacity: 1 },
			{ opacity: 0, duration: 0.5, ease: 'power4' }
		);
		gsap.fromTo(
			linkName,
			{ letterSpacing: 'normal' },
			{ letterSpacing: '-1.25rem', duration: 0.5, ease: 'power4' }
		);
		// t1.to(linkName, { autoAlpha: 0, delay: 0, duration: 0.2 })
		// 	.to(linkName, { letterSpacing: '-1.25rem', duration: 0.4 }, '-=.2')
		// 	.to(linkIcon, {
		// 		autoAlpha: 1,
		// 		delay: 0.4,
		// 	});
	};
	const leaveLink = (e) => {
		const linkName = e.target.childNodes[0].childNodes[0];
		const linkIcon = e.target.childNodes[0].childNodes[1];
		console.log('left');
		for (let ico of linkIcons) {
			// console.log(ico == linkIcon);
			// console.log(linkIcon);
			// console.log(ico);
			// if (ico != linkIcon) {
			gsap.to(ico, { opacity: 0, duration: 0.5, ease: 'power4' });
			// }
		}
		// console.log(linkName);
		// console.log(linkIcon);
		const t1 = gsap.timeline();
		t1.fromTo(
			linkIcon,
			{ opacity: 1 },
			{ opacity: 0, duration: 0.5, ease: 'power4' }
		)
			.fromTo(
				linkName,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5, ease: 'power4' },
				'-=.5'
			)
			.fromTo(
				linkName,
				{ letterSpacing: '-1.25rem' },
				{ letterSpacing: 'revert', duration: 0.5, ease: 'power4' },
				'-=.5'
			);
		// t1.to(linkIcon, {
		// 	autoAlpha: 0,
		// 	delay: 0,
		// 	duration: 0.2,
		// })
		// 	.to(linkName, { autoAlpha: 1, delay: 0.2 })
		// 	.to(linkName, { letterSpacing: 'normal', duration: 0.4 }, '-=.2');
	};

	link.forEach((e) => {
		console.log(e);
		e.addEventListener('mouseenter', enterLink);
		e.addEventListener('mouseleave', leaveLink);
	});
	// document
	// 	.querySelector('.link-container')
	// 	.addEventListener('mouseleave', () => {
	// 		for (let ico of linkIcons) {
	// 			// console.log(ico == linkIcon);
	// 			// console.log(linkIcon);
	// 			// console.log(ico);
	// 			// if (ico != linkIcon) {
	// 			gsap.to(ico, { opacity: 0, duration: 0.5, ease: 'power4' });
	// 			// }
	// 		}
	// 	});
};
