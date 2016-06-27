jQuery(document).ready(function($){
    //var myLatlng = {lat: -25.363, lng: 131.044};
    codeAddress('50007', function(err, myLatlng){
        if(err){
            return console.error(err);
        }
        var mapContainer = document.getElementById('map');
        var mapOptions = {
            zoom: 12,
            center: myLatlng
        };
        var map = new google.maps.Map(mapContainer, mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!",
            pickupSite: "Panadería Manolo"
        });

        marker.addListener('click', function() {
            console.log(marker.pickupSite);
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    });
});

function codeAddress(zipCode, fn) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': zipCode}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            return fn(null, results[0].geometry.location);
        } 
        else {
            return fn(status);
        }
    });
}
