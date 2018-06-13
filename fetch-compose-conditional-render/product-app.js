import { ProductCard } from './product-card.js'; // eslint-disable-line no-unused-vars

export class ProductApp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.container = document.createElement('div');
    const styleEl = document.createElement('style');

    this.container.textContent = 'Loading...';
    this.container.className = 'app';
    this.shadow.appendChild(styleEl);
    this.shadow.appendChild(this.container);
    this.addProductCards = this.addProductCards.bind(this);
  }

  async connectedCallback() {
    const productData = await this.getProductData();
    this.addProductCards(productData);
  }

  getProductData() {
    return fetch('/assets/assets.json').then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }

  addProductCards(data) {
    this.removeNodes(this.container);
    this.createProductCards(data).forEach(card => {
      this.container.appendChild(card);
    });
  }

  removeNodes(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  createProductCards(products) {
    return products.map(product => {
      const card = document.createElement('product-card');
      card.productData = product;
      return card;
    });
  }
}

customElements.define('product-app', ProductApp);
