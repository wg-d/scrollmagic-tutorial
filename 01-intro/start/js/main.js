$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//build a scene
	var ourScene = new ScrollMagic.Scene ({
		triggerElement: '#project01 img', // adding img makes the fade scene start at the top of the image
		duration: '60%', // makes it fade out at 60% of the viewport, so it fades as you scroll
		triggerHook: 0.9,

	})
	.setClassToggle('#project01', 'fade-in')
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		indent: 50,
		colorStart: 'green',
		colorEnd: 'red',
	}) // this requires the plugin made available in index.html
	// addIndicators allows us to see indicators as we scroll for debugging purposes
	.addTo(controller);

});
