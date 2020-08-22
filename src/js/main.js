import { DataCard } from './components/dataCard.js';


mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb3Z4Y3RvciIsImEiOiJja2UzZnNuMmswaXliMnJ1bGt5eTJycndpIn0.ahHfnxxfs1L2OYlTsxKlcQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});


const searchBar = document.querySelector(`#searchBar`);
let data;



searchBar.addEventListener(`keyup`, async (e) => {
  const searchString = e.target.value?.toLowerCase();

  data = searchString ? data.filter(d => d.name.toLowerCase().includes(searchString)) : await getData();

  displayData();
});

const getData = async () => {
  const res = await fetch('./assets/data.json');
  return await res.json();
};


async function displayData() {
  const main = document.querySelector(`main`);
  main.innerHTML = ``;


  data.forEach(data => {
    const el = document.createElement(`data-card`);
    el.data = data;
    main.appendChild(el);
  });
}

document.addEventListener(`DOMContentLoaded`, async () => {
  data = await getData();
  await displayData();
});