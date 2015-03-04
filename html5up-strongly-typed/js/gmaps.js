function initialize() 
{
	var mapCanvas = document.getElementById('map-canvas');
	var myLatlng = new google.maps.LatLng(34.0866457,-117.8727476,449);

	var mapOptions = 
	{
		zoom: 15,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
	
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		});
}

google.maps.event.addDomListener(window, 'load', initialize);

