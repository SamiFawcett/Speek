function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 20, center: {lat: -35, lng: 150}});
  var infoWindow = new google.maps.InfoWindow;
  if(navigator.geolocation){
  	navigator.geolocation.getCurrentPosition(function(position){
  		var pos = {
  			lat: position.coords.latitude,
  			lng: position.coords.longitude
  		};
  	
  	infoWindow.setPosition(pos);
  	infoWindow.setContent('Start Speeking!');
  	infoWindow.open(map);
  	map.setCenter(pos);
  }, function(){
  	handleLocationError(true, infoWindow, map.getCenter());
  });

  } else {
  	handleLocationError(false, infoWindow, map.getCenter())
  }
  start();
}



function findPeople(){
	var markerArray = [];
	var directionsService = new google.maps.DirectionsService;
	var directiosnsDisplay = new google.maps.DirectionsRenderer({map:map});
	var stepDisplay = new google.maps.InfoWindow;

	var onChangeHandler = function(){
		calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map);
	};
	document.getElementById('start').addEventListener('change', onChangeHandler);
	document.getElementById('search').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map){
	for(var i = 0; i < markerArray.length; i++){
		markerArray[i].setMap(null);
	}
	directionsService.route({
		origin: document.getElementById('start').value,
		destination: document.getElementById('search').value,
		travelMode: 'WALKING'
	}, function(response, status){
		if(status === 'OK'){
			//showSteps(directionResult, markerArray, stepDisplay, map);
		}
	});
}

function start(){
	document.getElementById('floating-panel').onclick = function(){
		document.getElementById('begin-bttn').innerHTML = "Loading..."
		setTimeout(function() {
		document.getElementById('floating-panel').style.visibility = 'hidden';
		}, 3000);
	}
}

	