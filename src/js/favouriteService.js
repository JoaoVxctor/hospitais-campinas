import { filterHospitals } from './main.js';
import { select } from './utils.js'

const favourites = JSON.parse(localStorage.getItem('favourites') || []);
const searchBar = select('#searchBar');

const addFavouritesListeners = () => {
    const favouriteButtons = document.querySelectorAll(' .fa-heart ');
    favouriteButtons.forEach(button => button.addEventListener('click', () => favButton(button)))
}

const favButton = async button => {

    if (favourites.includes(`${button.id}`)) {
        button.classList.replace('fas', 'far');
        favourites.pop(button.id);
    } else {
        button.classList.replace('far', 'fas');
        favourites.push(button.id);
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));
    await filterHospitals(searchBar.value);
}

export { favourites, addFavouritesListeners }