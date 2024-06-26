import { DataCard } from './components/dataCard.js';
import { CarouselItems } from './components/carouselItems.js';
import { unnacent, select } from './utils.js';
import { addMarker, clearMarkers } from './mapService.js';
import { favourites, addFavouritesListeners } from './favouriteService.js';


const searchBar = select(`#searchBar`);
const carousel = select(`.carousel-inner`);
const main = select(`main`);


const getData = async () => {
  const res = await fetch('./assets/datahospitais.json');
  return await res.json();
};


const displayData = async data => {
  main.innerHTML = ``;
  clearMarkers();
  
  data.forEach(hospital => {
    hospital.favorito = favourites.includes(`${hospital.id}`);
    const el = document.createElement(`data-card`);
    el.data = hospital;
    main.appendChild(el);

    addMarker(hospital, el);
  });

  addFavouritesListeners();

};


const displayHighlights = data => carousel.innerHTML = new CarouselItems(data).innerHTML;


select(`#searchForm`).addEventListener(`submit`, e => e.preventDefault());

document.addEventListener(`DOMContentLoaded`, async () => {

  const data = await getData();
  await displayData(data);

  displayHighlights(data);
});

searchBar.addEventListener(`keyup`, async e => {
  const searchString = e.target.value?.toLowerCase();

  await filterHospitals(searchString);
});

const filterHospitals = async searchString => {
  const data = await getData();
  const searchResult = searchString ? data.filter(d =>
    unnacent(d.endereco.rua).includes(searchString) ||
    unnacent(d.endereco.cep).includes(searchString) ||
    unnacent(d.endereco.numero).includes(searchString) ||
    unnacent(d.endereco.bairro).includes(searchString) ||
    unnacent(d.nome).includes(searchString)
  ) : data;

  displayData(searchResult);
}

export { filterHospitals }