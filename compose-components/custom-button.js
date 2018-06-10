const host = window.ShadyDOM ? '.style-scope.product-app' : ':host';

const style = `
${host} button {
  background-color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  cursor: pointer;
}`;

export class CustomButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.button = document.createElement('button');
    const styleEl = document.createElement('style');

    styleEl.textContent = style;
    this.button.textContent =
      this.getAttribute('label') || 'Click me';

    shadow.appendChild(this.button);
    shadow.appendChild(styleEl);
  }

  static get observedAttributes() {
    return ['label'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.button.textContent = newValue;
  }

  set label(value) {
    this.setAttribute('label', value);
  }
}

customElements.define('custom-button', CustomButton);
