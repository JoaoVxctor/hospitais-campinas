


const random = (mx, mn) => Math.floor(Math.random() * (mx - mn) + mn);
const unnacent = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const select = query => document.querySelector(`${query}`);

export { random, unnacent, select };