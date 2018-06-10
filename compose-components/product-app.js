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
.product-container {
  display: flex;
}
product-card {
  max-width: 300px;
  margin-right: 70px;
}
`;

export class ProductApp extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const styleEl = document.createElement('style');
    const container = document.createElement('div');

    container.setAttribute('class', 'product-container');
    styleEl.textContent = style;

    shadow.appendChild(styleEl);
    shadow.appendChild(container);

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
