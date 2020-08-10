import { DataCard } from './components/dataCard.js';

const searchBar = document.querySelector(`#searchBar`);
let data;

searchBar, addEventListener(`keyup`, async (e) => {
  const searchString = e.target.value;
  console.log(searchString);
  if (searchString) {
    const filtered = data.filter(d => d.name.includes(searchString));

    data = filtered;

  } else {
    data = await getData();

  }

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