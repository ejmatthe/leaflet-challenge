// Set variable for URL
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Use d3 to run the query and 
d3.json(url).then(function(data) {
    createEarthquakeFeatures(data.features);
});

// Define main function to essentially draw and place the markers
function createEarthquakeFeatures(earthquakeData) {
    // Define function to create and bind popups to each point.
     function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>Location: " + feature.properties.place + "</h3><hr><br>Time: " + 
        new Date(feature.properties.time) + "<br>Magnitude: " + feature.properties.mag + "</hr>");
    }
    // Define function to create markers to show depth and magnitude
    function createMarkers(feature, latlng) {
        let options = {
            radius: feature.properties.mag*5,
            fillColor: colorMarker(feature.geometry.coordinates[2]),
            color: "black",
            weight: .5,
            fillOpacity: .75,
            opacity: .75
        }
        return L.circleMarker(latlng, options);
    }
    // Store the geoJSON into a variable for data flexibility
    let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature,
        pointToLayer: createMarkers
    });
    createMap(earthquakes);
}

// Define function to determine color of the markers
function colorMarker(depth) {
    if (depth > 90) return "red";
    else if (depth > 70) return "orangered";    
    else if (depth > 50) return "orange";
    else if (depth > 30) return "yellow";    
    else if (depth > 10) return "greenyellow";
    else return "green";
    };

// Create and add legend
let legend = L.control({position: "bottomright"});
legend.onAdd = function (map) {
    let div = L.DomUtil.create("div", "info legend")
    div.innerHTML += '<i style="background: green"></i><span>10 > Depth > -10</span><br>';
    div.innerHTML += '<i style="background: greenyellow"></i><span>30 > Depth > 10</span><br>';
    div.innerHTML += '<i style="background: yellow"></i><span>50 > Depth > 30</span><br>';
    div.innerHTML += '<i style="background: orange"></i><span>70 > Depth > 50</span><br>';
    div.innerHTML += '<i style="background: orangered"></i><span>90 > Depth > 70</span><br>';
    div.innerHTML += '<i style="background: red"></i><span>Depth > 90</span><br>';
return div;
};

// Define function to create the map  
function createMap(earthquakes) {
    let myMap = L.map("map", {
        center: [
            34.0522, -118.2437
        ],
        zoom: 4,
        layers: [earthquakes]
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);
    legend.addTo(myMap);
    }





