export class DataCard extends HTMLElement {

    set data({ image, nome, telefone, inauguracao }) {
        this.innerHTML = `
        <div class="card mx-4 mb-4">
            <img class="card-img-top  rounded mx-auto d-block card-image mt-4" src="${ image || `https://www.tibs.org.tw/images/default.jpg`}" alt="Card image cap">
            <div class="card-body">
                <h3 class="card-title text-center text-bold">${nome}</h3>
                <p class="card-text">Inaugurado em ${inauguracao}</p>
                <p class="card-text">Telefone: ${telefone}</p>
                <a href="#" class="btn btn-primary">Favourite</a>
            </div>
        </div>
        `;
    }
}

customElements.define(`data-card`, DataCard);