
export class CardComponent extends HTMLElement{

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = /* html */ `
        <style rel="stylesheet">
            @import "./css/bootstrap/bootstrap.min.css";
            @import "./src/App/components/cards/cardComponents.js";
            @import "./src/App/components/cards/cardStyle.css";
        </style>
        <div class="col-4">
        <div class="card" id="cards" style="width: 18rem;">
                <slot name = "imagen"></slot>
                <div class="card-body">
                    <h5 class="card-title"><slot name = "numero"></slot></h5>
                    <p class="card-text"><slot name = "contenido"></slot></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('card-component', CardComponent)