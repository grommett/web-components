import { CustomButton } from './custom-button.js'; // eslint-disable-line no-unused-vars

const style = `
.product-card h1 {
  font-size: 18px;
}

.product-card img{
  width: 100%;
  max-width: 200px;
}
`;

export class ProductCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const styleEl = document.createElement('style');
    const productCard = document.createElement('div');
    this.h1 = document.createElement('h1');
    this.button = document.createElement('custom-button');
    this.description = document.createElement('p');
    this.price = document.createElement('p');
    this.image = document.createElement('img');

    this.button.setAttribute('label', 'Buy Product');
    productCard.className = 'product-card';
    this.h1.textContent = 'Product Card';
    styleEl.textContent = style;

    shadow.appendChild(styleEl);
    shadow.appendChild(productCard);
    productCard.appendChild(this.h1);
    productCard.appendChild(this.image);
    productCard.appendChild(this.description);
    productCard.appendChild(this.price);
    productCard.appendChild(this.button);
  }

  set productData(data) {
    this.h1.textContent = data.name;
    this.image.setAttribute('src', `../assets/${data.image}`);
    this.button.label = data.cta;
    this.description.textContent = data.description;
    this.price.textContent = `Price: ${data.price}`;
  }
}

customElements.define('product-card', ProductCard);
