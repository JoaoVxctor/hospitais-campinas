import { DataCard } from './components/dataCard.js';


const searchBar = document.querySelector(`#searchBar`);

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb3Z4Y3RvciIsImEiOiJja2UzZnNuMmswaXliMnJ1bGt5eTJycndpIn0.ahHfnxxfs1L2OYlTsxKlcQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
  center: [-47.0616, -22.9064], // starting position [lng, lat]
  zoom: 12 // starting zoom
});





searchBar.addEventListener(`keyup`, async (e) => {
  const searchString = e.target.value?.toLowerCase();

  const data = await getData();

  displayData(searchString ? data.filter(d => d.nome.toLowerCase().includes(searchString)) : data);
});

const getData = async () => {
  const res = await fetch('./assets/datahospitais.json');
  return await res.json();
};


const displayData = async (data) => {
  const main = document.querySelector(`main`);
  main.innerHTML = ``;


  data.forEach(hospital => {
    const el = document.createElement(`data-card`);
    el.data = hospital;
    main.appendChild(el);

    // const marker = new mapboxgl.Marker().setLngLat([hospital.endereco.longitude, hospital.endereco.latitude])
    //   .setPopup(new mapboxgl.Popup().setHTML(el.innerHTML))

    //   .addTo(map);
  });
};

document.addEventListener(`DOMContentLoaded`, async () => {

  await displayData(await getData());
  const a = document.querySelector(`.carousel-inner`);

});

