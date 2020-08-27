export class carouselItem extends HTMLElement {

    set data({ image, nome, telefone, inauguracao }) {
        this.innerHTML = `<div class="carousel-item active">
        <img
          class="d-block w-100"
          src="https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/a/atila-coronavirus-1400x800-0120.jpg"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/a/atila-coronavirus-1400x800-0120.jpg"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/a/atila-coronavirus-1400x800-0120.jpg"
          alt="Third slide"
        />
      </div>`;
    }
}