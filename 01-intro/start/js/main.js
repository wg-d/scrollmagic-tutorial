$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// loop through each project element
	$('.project').each(function(){

		//build a scene
	 var ourScene = new ScrollMagic.Scene({
		 triggerElement: this.children[0],
		 triggerHook: 0.9
	 })
	 .setClassToggle(this, 'fade-in')
	 .addIndicators({
		 name: 'fade scene',
		 colorTrigger: 'black',
		 indent: 50,
		 colorStart: 'green',
		 colorEnd: 'red'
	 }) // this requires the plugin made available in index.html
	 // addIndicators allows us to see indicators as we scroll for debugging purposes
	 .addTo(controller);
});

});
