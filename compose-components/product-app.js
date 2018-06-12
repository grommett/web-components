import { ProductCard } from './product-card.js'; // eslint-disable-line no-unused-vars

const products = [
  {
    name: 'Vans Old School',
    description: 'UA OLD SKOOL - Sneaker low',
    image: 'vans-red-check.jpg',
    price: '$10',
    cta: 'Buy these Vans!',
    sku: 'dcf3543b'
  },
  {
    name: 'Nike Air Vortex',
    description: 'AIR VORTEX - Sneaker low',
    image: 'nike-black.jpg',
    price: '$5',
    cta: 'Buy these Nikes!',
    sku: 'cd5ba49b'
  }
];

const style = `
.app * {
  font-family: Helvetica, Arial, sans-serif;
}
.app {
  display: flex;
}
.app product-card {
  max-width: 300px;
  margin-right: 70px;
  overflow: hidden;
}

`;

export class ProductApp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    const styleEl = document.createElement('style');

    styleEl.textContent = style;
    container.className = 'app';
    this.shadow.appendChild(styleEl);
    this.shadow.appendChild(container);

    this.createProductCards(products).forEach(card =>
      container.appendChild(card)
    );
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
