import { DataCard } from './components/dataCard.js';
import { CarouselItems } from './components/carouselItems.js';
import { unnacent } from './utils.js';

const searchBar = document.querySelector(`#searchBar`);
const carousel = document.querySelector(`.carousel-inner`);
const main = document.querySelector(`main`);
const markers = [];

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb3Z4Y3RvciIsImEiOiJja2UzZnNuMmswaXliMnJ1bGt5eTJycndpIn0.ahHfnxxfs1L2OYlTsxKlcQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
  center: [-47.0616, -22.8700], // starting position [lng, lat]
  zoom: 11 // starting zoom
});



searchBar.addEventListener(`keyup`, async e => {
  const searchString = e.target.value?.toLowerCase();

  const data = await getData();
  const searchData = searchString ? data.filter(d =>
    unnacent(d.endereco.rua).includes(searchString) ||
    unnacent(d.endereco.cep).includes(searchString) ||
    unnacent(d.endereco.numero).includes(searchString) ||
    unnacent(d.nome).includes(searchString)
  ) : data;

  displayData(searchData);
});

const getData = async () => {
  const res = await fetch('./assets/datahospitais.json');
  return await res.json();
};


const displayData = async data => {
  main.innerHTML = ``;
  markers.forEach(marker => marker.remove());
  markers.length = 0;

  data.forEach(hospital => {
    const el = document.createElement(`data-card`);
    el.data = hospital;
    main.appendChild(el);

    const marker = new mapboxgl.Marker()
      .setLngLat([hospital.endereco.longitude, hospital.endereco.latitude])
      .setPopup(new mapboxgl.Popup().setHTML(el.description))
      .addTo(map);

    markers.push(marker);
  });


};

document.addEventListener(`DOMContentLoaded`, async () => {

  const data = await getData();
  await displayData(data);

  displayHighlights(data);
});




const displayHighlights = data => carousel.innerHTML = new CarouselItems(data).innerHTML;
