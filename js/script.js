window.addEventListener("load", function () {
	const conor_thinking = document.querySelector('#conor-thinking')

	const animation_holder = document.querySelector('.animation-holder')

	// animation holder stlying based on the svg
	animation_holder.style.height = conor_thinking.offsetHeight / 1.95 + 'px'
	animation_holder.style.paddingTop = conor_thinking.offsetHeight / 19 + 'px'
	animation_holder.style.width = conor_thinking.offsetWidth / 1.01 + 'px'

	// running animation using gsap
	animateColor()
	animateImages()

	// testAnimation()
})

function testAnimation() {
	const $img2 = document.querySelector('.image2');
	const $logo = document.querySelector('.transition__logo');
	const $frameBlack = document.querySelector('.page-transition__black');
	const $frameRed = document.querySelector('.page-transition__red');
	const $container = document.querySelector('#container');

	let tltransition = new gsap.timeline({
			paused: false,
			delay: 0,
			stagger: 2,
		})
		.fromTo($frameRed, 2.2, {
			scaleX: 0
		}, {
			scaleX: 1,
			transformOrigin: 'left',
			ease: Power4.easeInOut
		}, )
		.fromTo($frameBlack, 2.2, {
			scaleX: 0
		}, {
			scaleX: 1,
			transformOrigin: 'left',
			ease: Power4.easeInOut
		}, .2)
		.fromTo($logo, 1.6, {
			xPercent: -100,
			autoAlpha: 0
		}, {
			xPercent: 0,
			autoAlpha: 1,
			ease: Power4.easeInOut
		}, .7)
		.set($frameRed, {
			scaleX: 0
		})
		.set($img2, {
			autoAlpha: 0
		})
		.to($frameBlack, 2.2, {
			scaleX: 0,
			transformOrigin: 'right',
			ease: Power4.easeInOut
		})
		.to($logo, .2, {
			autoAlpha: 0
		}, '-=1.2')

	$button.addEventListener('click', () => {
		tltransition.play(0);
	});

}




function animateColor() {
	const conor_thinking_svg = document.querySelector('#conor-thinking').contentDocument
	const svg_cls_1 = conor_thinking_svg.querySelector('.cls-1')

	const colorChangeDuration = 2;
	const colorChangeDelay = 0.5;

	let bodyColor = gsap.timeline({
		repeat: -1,
		yoyo: true,
		repeatDelay: colorChangeDelay
	})
	let svgColor = gsap.timeline({
		repeat: -1,
		yoyo: true,
		repeatDelay: colorChangeDelay
	})

	bodyColor
		.to('body', {
			backgroundColor: '#1ddce3',
			duration: colorChangeDuration,
		})
		.to('body', {
			backgroundColor: '#ff48a5',
			duration: colorChangeDuration,
		})
		.to('body', {
			backgroundColor: '#9354ff',
			duration: colorChangeDuration,
		})
		.to('body', {
			backgroundColor: '#BFA249',
			duration: colorChangeDuration,
		})

	svgColor
		.to(svg_cls_1, {
			fill: '#1ddce3',
			duration: colorChangeDuration,
		})
		.to(svg_cls_1, {
			fill: '#ff48a5',
			duration: colorChangeDuration,
		})
		.to(svg_cls_1, {
			fill: '#9354ff',
			duration: colorChangeDuration,
		})
		.to(svg_cls_1, {
			fill: '#BFA249',
			duration: colorChangeDuration,
		})

	// primary = #BFA249
	// bubblegum blue = #1ddce3
	// bubblegum pink = #ff48a5
	// bubblegum purple = #9354ff

}

function animateImages() {

	let images = document.querySelectorAll('.animation-holder img')
	// getting combined width of all images in the animation

	let totalOffset = 0;
	images.forEach(img => {
		totalOffset += img.offsetWidth
	});

	console.log(totalOffset);
	totalOffset = totalOffset - ((images[images.length - 1].offsetWidth) * 1.5)
	console.log(totalOffset);

	let imageTrain = gsap.timeline({
		repeat: -1,
		repeatDelay: 0.5,
	})

	imageTrain.to(images, {
		x: -totalOffset,
		duration: 5,
		repeat: -1,
		ease: Linear.easeNone
	})

}