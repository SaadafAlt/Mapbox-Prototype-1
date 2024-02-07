// Initialize Mapbox GL JS map
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FhZGFmbW9oc2luIiwiYSI6ImNsc2I3Y2ZmNTBjMmsyanQ2MmRsOHkxZWkifQ.ATkT6s4-RvauCDLA6C8VjQ'; // Replace with your Mapbox access token
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // Replace with your desired map style
    center: [-74.5, 40], // Example: New York City coordinates
    zoom: 9 // Example: Zoom level
});


// Check if geolocation is supported by the browser
if ("geolocation" in navigator) {
    // Prompt user for permission to access their location
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Get the user's latitude and longitude coordinates
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
  
        // Do something with the location data, e.g. display on a map
        console.log(`Latitude: ${lat}, longitude: ${lng}`);
      },
      // Error callback function
      (error) => {
        // Handle errors, e.g. user denied location sharing permissions
        console.error("Error getting user location:", error);
      }
    );
  } else {
    // Geolocation is not supported by the browser
    console.error("Geolocation is not supported by this browser.");
  }