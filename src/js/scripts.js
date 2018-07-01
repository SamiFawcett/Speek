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
}



function findPeople(){
	var markerArray = [];
	var directionsService = new google.maps.DirectionsService;
	var directiosnsDisplay = new google.maps.DirectionsRenderer({map:map});
	var stepDisplay = new google.maps.InfoWindow;

	calculateAndDisplayRoute(

	)
}