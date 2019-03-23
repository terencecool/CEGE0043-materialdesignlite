function trackAndCircle(){
	trackLocation();
	addPointLinePoly();
	// getEarthquakes();
	getFormData();
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

