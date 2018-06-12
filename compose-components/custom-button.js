const style = `
.custom-button {
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

    const shadow = (this.shadow = this.attachShadow({ mode: 'open' }));
    this.button = document.createElement('button');
    this.styleEl = document.createElement('style');

    this.styleEl.textContent = style;
    this.button.className = 'custom-button';
    this.button.textContent = this.getAttribute('label') || 'Click me';

    shadow.appendChild(this.styleEl);
    shadow.appendChild(this.button);
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
