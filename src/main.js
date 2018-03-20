import $ from 'jquery';
import '../css/styles.css';

// function initMap() {
//   // Create a map object and specify the DOM element for display.
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 47.60804110000001, lng: -122.3361698},
//     zoom: 8
//   });
// }

$(document).ready(function(){
  var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBihlB7C_yawFAQTCzUwfqEB6YLxxda7nY'
  });
  googleMapsClient.geocode({
    address: '1201 3rd Ave #1660, Seattle, WA 98101'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  });
  // initMap();

});
