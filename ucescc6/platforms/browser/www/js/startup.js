function trackAndCircle(){
	trackLocation();
	addPointLinePoly();
	getEarthquakes();
	loadW3HTML();
}

function loadW3HTML() {
w3.includeHTML();
}

function startup(){
	document.addEventListener('DOMContentLoaded', function(){
		getPort();
		trackAndCircle();
	},false);
}

