function trackAndCircle(){
	trackLocation()
	addPointLinePoly()
	getEarthquake()
}

function startup(){
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	},false);
}