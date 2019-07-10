//** Leaflet example **//

var map = L.map('map').setView([-2, -84], 6); //initializes a map object with a <div> element or its id, setView modifies map state
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' 
});  // load and display tile layers on the map given (URL and options)
map.addLayer(osm); //func/method to add the layer to the map

