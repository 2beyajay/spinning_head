window.addEventListener("load", function () {
	transitions()
})

function transitions() {
	// screen1
	const screen1 = document.querySelector('#screen1')
	const lifted = document.querySelector('#lifted')
	const or = document.querySelector('#or')
	const theStory = document.querySelector('#the-story')
	const keepYour = document.querySelector('#keep-your')

	// screen2
	const screen2 = document.querySelector('#screen2')
	const conor_thinking_svg = document.querySelector('#nothing-crossed').contentDocument
	const nothing = conor_thinking_svg.querySelector('#nothing')
	const cross = conor_thinking_svg.querySelector('#cross')

	// aniamtion container
	const animationContainer = document.querySelector('.container')

	let t1 = gsap.timeline()

	t1.fromTo(lifted, {
		y: window.innerHeight,
		opacity: 0,
	}, {
		delay: 1,
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
		delay: 2,
		onComplete: function(){screen1.style.display='none'; screen2.style.display="grid"}
	})
	.fromTo(screen2,{ 
			opacity: 0
		}, {
			delay:1,
			opacity: 1,
			duration: 1,
		}
	)
	.fromTo(cross, {
			opacity: 0
		},{
			duration:0.75,
			ease: Power0.easeNone,
			opacity: 1
		}
	)
	.fromTo(cross, {
			transform: 'scaleX(0)'
		},{
			transform: 'scaleX(1)',
			duration: 1
		}
	)
	.to(screen2,{
		delay:1.5,
		duration:1,
		y: window.innerHeight*1.5,
		ease: Back.easeIn.config(1.4),
		onComplete: function(){screen2.style.display='none'; animationContainer.style.display = 'flex';}
	})
	.to(animationContainer,{
		opacity:1,
		duration:1,
		onComplete: function(){animateColor();}
	})

}



function animateColor() {
	const conor_thinking_svg = document.querySelector('#conor-thinking').contentDocument
	const svg_cls_1 = conor_thinking_svg.querySelector('.cls-1')

	const colorChangeDuration = 5;
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

	animateImages();

	// primary = #BFA249
	// bubblegum blue = #1ddce3
	// bubblegum pink = #ff48a5
	// bubblegum purple = #9354ff

}

function animateImages() {
	const conor_thinking = document.querySelector('#conor-thinking')
	const animation_holder = document.querySelector('.animation-holder')
	const objectContainer = document.querySelector('.object-container')

	// animation holder stlying based on the svg
	animation_holder.style.height = conor_thinking.offsetHeight / 1.95 + 'px'
	animation_holder.style.paddingTop = conor_thinking.offsetHeight / 19 + 'px'
	animation_holder.style.width = conor_thinking.offsetWidth / 1.01 + 'px'

	let images = document.querySelectorAll('.animation-holder img')

	// getting combined width of all images in the animation
	let totalOffset = 0;
	images.forEach(img => {
		totalOffset += img.offsetWidth
	});

	totalOffset = totalOffset - ((images[images.length - 1].offsetWidth) * 1.5)

	gsap.to(images,{
			opacity: 1,
			duration: 1
		}
	)

	let imageTrain = gsap.timeline({
		repeat: -1,
	})

	imageTrain.to(images, {
		x: -totalOffset,
		duration: images.length*2,
		repeat: -1,
		ease: Linear.easeNone
	})


	let rotationTimeline = gsap.timeline({
		repeat:-1,
	})

	rotationTimeline
	.fromTo([animation_holder, objectContainer], {
		rotationY:0
	},{
		rotationY:360,
		duration: 10,
		ease: Power0.easeNone
	})
}
