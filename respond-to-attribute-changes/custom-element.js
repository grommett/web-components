class CustomElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    this.pElement = document.createElement('p');

    style.textContent = 'p{font-weight:bold;}';
    shadow.appendChild(style);
    shadow.appendChild(this.pElement);
  }

  static get observedAttributes() {
    return ['label'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.pElement.textContent = newValue;
  }
}
customElements.define('custom-element', CustomElement);
