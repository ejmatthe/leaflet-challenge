# leaflet-challenge
For this challenge, I used data from the United States Geological Survey (USGS) provided by a GeoJSON feed on their website. This was divided into 2 parts: Part 1 which creates a visualization for earthquake data and Part 2, which was optional, which adds tectonic plate information as an overlay.
## Part 1: Create the Earthquake Visualization
The begins with the USGS GeoJSON feed ( http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php ). Once the data was pulled, Leaflet was used to create a map of all earthquakes in the dataset, plotting them by longitude and latitude. The visualization includes the following features:
  * Each marker's size signifies the earthquake's magnitude, and the color signifies the depth of the earthquake
  * Popups for each marker that provide additional information when clicked
  * A legend for easier reading and understanding

## Part 2: Plot Additional Data for Tectonic Plates
In order to make the visualization more informative and to illustrate the relationship between tectonic plates and seismic activities, an additional dataset was added. Once added, both the tectonic plate dataset and earthquake dataset were defined as separate overlays. Layer controls were then added in order to see either visualization separately, or together.
