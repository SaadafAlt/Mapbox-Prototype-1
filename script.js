// Initialize Mapbox GL JS map
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FhZGFmbW9oc2luIiwiYSI6ImNsc2I3Y2ZmNTBjMmsyanQ2MmRsOHkxZWkifQ.ATkT6s4-RvauCDLA6C8VjQ'; // Replace with your Mapbox access token
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // Replace with your desired map style
    center: [-74.5, 40], // Example: New York City coordinates
    zoom: 9 // Example: Zoom level
});
