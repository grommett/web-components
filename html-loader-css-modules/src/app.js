import css from './app.css';
import { r } from '../lib/renderer'; // jsx handler
import theme from './theme.css';
import { ProductCard } from './components/product-card/product-card';

export class App extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    theme.insertInto(this.shadow);
    css.insertInto(this.shadow);
  }

  async connectedCallback() {
    const data = await this.getProductData();
    this.shadow.appendChild(this.render(data));
  }

  handleClick(sku) {
    console.log(sku);
  }

  getProductData() {
    return fetch('/assets/assets.json').then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }

  render(data) {
    const { productContainer } = css;
    const { h1 } = theme;
    return (
      <fragment>
        <h1 class={h1}>Products</h1>
        <div class={productContainer}>
          {data.map(item => (
            <ProductCard
              handleClick={this.handleClick}
              sku={item.sku}
              name={item.name}
              label={item.cta}
              source={`/assets/${item.image}`}
            >
              {item.description}
            </ProductCard>
          ))}
        </div>
      </fragment>
    );
  }
}

App.tagName = 'x-app';
customElements.define('x-app', App);
