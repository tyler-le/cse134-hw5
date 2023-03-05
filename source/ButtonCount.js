class ButtonCount extends HTMLElement {
    constructor() {
        super();
        let counter = 0;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `<button>Times Clicked: ${counter}</button>`;

        const button = shadowRoot.querySelector("button");
        button.addEventListener("click", () => {
            counter++;
            button.textContent = `Times Clicked: ${counter}`;
        });
    }
}

customElements.define("button-count", ButtonCount);