function initialize() {
				var mapCanvas = document.getElementById('map-canvas');
				var mapOptions = {
					center: new google.maps.LatLng(34.0866457,-117.8727476,449),
					zoom: 15,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}
				var map = new google.maps.Map(mapCanvas, mapOptions)
			}
			google.maps.event.addDomListener(window, 'load', initialize);

