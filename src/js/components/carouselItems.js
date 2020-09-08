import { random } from '../utils.js';

export class CarouselItems {

  constructor(data) {
    const items = this.getRandomIndexes(data);

    this.innerHTML = `  <div class="carousel-inner">
        ${this.getCarouselItem(items[0], true)}
        ${this.getCarouselItem(items[1])}
        ${this.getCarouselItem(items[2])}
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
  `;
  }

  getCarouselItem({ imagem, nome }, active) {
    return `
          <div class="carousel-item  ${active ? 'active' : ''}">
          <img class="d-block mx-auto my-auto" src="${ imagem || `https://www.tibs.org.tw/images/default.jpg`}" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <h5>${nome}</h5>
          </div>
        </div>`;
  }


  getRandomIndexes = data => {
    const list = [];

    do {
      const a = +random(0, data.length);

      list.includes(data[a]) || list.push(data[a]);
    } while (list.length < 3);

    return list;
  };



}

