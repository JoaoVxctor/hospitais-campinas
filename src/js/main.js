import { DataCard } from './components/dataCard.js';
import { CarouselItem } from './components/carouselItem.js';


const searchBar = document.querySelector(`#searchBar`);
let data;

searchBar, addEventListener(`keyup`, async (e) => {
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

async function displayCarousel() {
  const carousel = document.querySelector(`.carousel-inner`);
  carousel.innerHTML = ``;

  data.forEach(data => {
    const el = document.createElement(`carousel-item`);
    el.data = data;
    carousel.appendChild(el);
  });

}

document.addEventListener(`DOMContentLoaded`, async () => {
  data = await getData();
  await displayData();
  await displayCarousel();
});