# leaflet-challenge
For this challenge, I used data from the United States Geological Survey (USGS) provided by a GeoJSON feed on their website. 

## Create the Earthquake Visualization
The begins with the USGS GeoJSON feed ( http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php ). Once the data was pulled, Leaflet was used to create a map of all earthquakes in the dataset, plotting them by longitude and latitude. The visualization includes the following features:
  * Each marker's size signifies the earthquake's magnitude, and the color signifies the depth of the earthquake
  * Popups for each marker that provide additional information when clicked
  * A legend for easier reading and understanding (at the time of assignment submission, the colors do not display correctly for the legend.)
