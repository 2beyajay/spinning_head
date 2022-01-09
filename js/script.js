window.addEventListener("load", function () {
	const conor_thinking = document.querySelector('#conor-thinking')

	const animation_holder = document.querySelector('.animation-holder')

	// animation holder stlying based on the svg
	animation_holder.style.height = conor_thinking.offsetHeight / 1.95 + 'px'
	animation_holder.style.paddingTop = conor_thinking.offsetHeight / 19 + 'px'
	animation_holder.style.width = conor_thinking.offsetWidth / 1.01 + 'px'

	// running animation using gsap
	// animateColor()
	// animateImages()

	screen1and2()
})

function screen1and2() {
	let lifted = document.querySelector('#lifted')
	let or = document.querySelector('#or')
	let theStory = document.querySelector('#the-story')
	let keepYour = document.querySelector('#keep-your')

	let t1 = gsap.timeline()

	t1.fromTo(lifted, {
		y: window.innerHeight,
		opacity: 0,
		delay: .5
	}, {
		opacity: 1,
		y: window.innerHeight / 5,
		duration: 5,
		ease: Power3.easeInOut
	})
	.fromTo(or, {
		yPercent: 100,
		opacity: 0
	}, {
		opacity: 1,
		y: window.innerHeight / 7,
		duration: 1.5,
		ease: Power3.easeInOut
	})
	.fromTo(theStory, {
		yPercent: 100,
		opacity: 0
	}, {
		opacity: 1,
		y: window.innerHeight / 6,
		duration: 1.5,
		ease: Power3.easeInOut
	})
	.fromTo(keepYour, {
		yPercent: 100,
		opacity: 0
	}, {
		opacity: 1,
		y: window.innerHeight / 5.75,
		duration: 1.5,
		ease: Power3.easeInOut,
	})
	.to([lifted, or, theStory, keepYour], {
		opacity: 0,
		y: -window.innerHeight,
		duration: 1,
		ease: Power3.easeIn,
		delay: 2
	})

}

function screen2(){
	let lifted = document.querySelector('#lifted')
	let or = document.querySelector('#or')
	let theStory = document.querySelector('#the-story')
	let keepYour = document.querySelector('#keep-your')
}



function animateColor() {
	const conor_thinking_svg = document.querySelector('#conor-thinking').contentDocument
	/* const svg_cls_1 = conor_thinking_svg.querySelector('.cls-1') */

	const colorChangeDuration = 2;
	const colorChangeDelay = 0.5;

	let bodyColor = gsap.timeline({
		repeat: -1,
		yoyo: true,
		delay: 0.5,
		repeatDelay: colorChangeDelay
	})
	/* let svgColor = gsap.timeline({
		repeat: -1,
		yoyo: true,
		repeatDelay: colorChangeDelay
	}) */

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

	/* svgColor
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
		}) */

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