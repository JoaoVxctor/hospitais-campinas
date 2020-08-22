export class DataCard extends HTMLElement {

    set data({ image, name, description }) {
        this.innerHTML = `
        <div class="card mx-4 mb-4">
            <img class="card-img-top  rounded mx-auto d-block card-image mt-4" src="${ image}" alt="Card image cap">
            <div class="card-body">
                <h3 class="card-title text-center text-bold">${name}</h3>
                <p class="card-text">${description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
    }
}

customElements.define(`data-card`, DataCard);