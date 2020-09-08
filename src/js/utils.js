


const random = (mx, mn) => Math.floor(Math.random() * (mx - mn) + mn);
const unnacent = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export { random, unnacent };