//** Leaflet example **//

var map = L.map('map').setView([0, 1], 6); //initializes a map object with a <div> element or its id, setView modifies map state (Center and zoom)
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' 
});  // load and display tile layers on the map given (URL and options)
map.addLayer(osm); //func/method to add the layer to the map

var Layer_name = new L.tileLayer.wms("http://localhost:8082/geoserver/wms", {  //adding WMS layer from geoserver
layers: 'workspace:Layer_name',
format: 'image/png', //default when using transparency
transparent: true,
version: '1.1.0'
});
map.addLayer(Layer_name); 

var basemaps = {   //basemap and overlay layers
"<img src='images/osm.png'/> OSM": osm
};
var overlay_layers = {
"Title": Layer_name,
"Title 2": Layer_name2,
//...
};
L.control.layers(basemaps, overlay_layers).addTo(map);  //adding layer switcher



