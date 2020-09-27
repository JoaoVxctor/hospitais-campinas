import { favourites, addFavouritesListeners } from './favouriteService.js';


mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb3Z4Y3RvciIsImEiOiJja2UzZnNuMmswaXliMnJ1bGt5eTJycndpIn0.ahHfnxxfs1L2OYlTsxKlcQ';
const markers = [];

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [-47.0616, -22.8700], // starting position [lng, lat]
    zoom: 11 // starting zoom
});

const clearMarkers = () => {
    markers.forEach(marker => marker.popup.isOpen() || marker.remove());
    markers.length = 0;
};

const addMarker = (hospital, el) => {
    const popup = new mapboxgl.Popup().setHTML(el.description);
    popup.on('open', () => addFavouritesListeners());

    const marker = new mapboxgl.Marker()
        .setLngLat([hospital.endereco.longitude, hospital.endereco.latitude])
        .setPopup(popup)
        .addTo(map);
    markers.push(marker);
};


export { clearMarkers, addMarker };