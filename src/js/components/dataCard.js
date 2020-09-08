export class DataCard extends HTMLElement {

    set data({ imagem, nome, telefone, inauguracao, endereco }) {

        this.innerHTML = `
        <div class="card mx-4 mb-4">
            <img class="card-img-top  rounded mx-auto d-block img-fluid" src="${ imagem || `https://www.tibs.org.tw/images/default.jpg`}" alt="Card image cap">
            <div class="card-body">
                <h3 class="card-title text-center">${nome}</h3>
                <p class="card-text ">Inaugurado em ${inauguracao}<br />
                Telefone: ${telefone} <br />
                Endereco: ${endereco.cidade}, ${endereco.rua} - numero ${endereco.numero}<br />
                CEP: ${endereco.cep}</p> 
            </div>
        </div>
        `;
    }

    get description() {

        const descObj = this.children[0].cloneNode(true);
        descObj.classList.forEach(c => descObj.classList.remove(c));

        return descObj.innerHTML;

    }
}

customElements.define(`data-card`, DataCard);