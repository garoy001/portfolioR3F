import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export const startSnapScroll = () => {
	// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
	// const sections = document.querySelectorAll('.page-section');
	// // this scrolling object just allows us to conveniently call scrolling.enable(), scrolling.disable(), and check if scrolling.enabled is true.
	// // some browsers (like iOS Safari) handle scrolling on a separate thread and can cause things to get out of sync (jitter/jumpy), so when we're animating the scroll position, force an update of GSAP tweens when there's a scroll event in order to maintain synchronization)
	// const scrolling = {
	// 	enabled: true,
	// 	events: 'scroll,wheel,touchmove,pointermove'.split(','),
	// 	prevent: (e) => e.preventDefault(),
	// 	disable() {
	// 		if (scrolling.enabled) {
	// 			scrolling.enabled = false;
	// 			window.addEventListener('scroll', gsap.ticker.tick, {
	// 				passive: true,
	// 			});
	// 			scrolling.events.forEach((e, i) =>
	// 				(i ? document : window).addEventListener(e, scrolling.prevent, {
	// 					passive: false,
	// 				})
	// 			);
	// 		}
	// 	},
	// 	enable() {
	// 		if (!scrolling.enabled) {
	// 			scrolling.enabled = true;
	// 			window.removeEventListener('scroll', gsap.ticker.tick);
	// 			scrolling.events.forEach((e, i) =>
	// 				(i ? document : window).removeEventListener(e, scrolling.prevent)
	// 			);
	// 		}
	// 	},
	// };
	// sections.forEach((section, i) => {
	// 	ScrollTrigger.create({
	// 		trigger: section,
	// 		start: 'top bottom-=1',
	// 		end: 'bottom top+=1',
	// 		onEnter: () => goToSection(section),
	// 		onEnterBack: () => goToSection(section),
	// 	});
	// });
};
