import css from './app.css';
import { r } from '../lib/renderer';
import { ProductCard } from './components/product-card/product-card';
import { MyCE } from './example';

export class App extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    css.insertInto(this.shadow);
  }

  async connectedCallback() {
    this.shadow.appendChild(this.render());
    const data = await this.getProductData();
    // console.log(data);
  }

  handleClick(e) {
    console.log('card callback in app');
  }

  getProductData() {
    return fetch('/assets/assets.json').then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }

  render() {
    console.log('rendering');
    return (
      <fragment>
        <h1 class={css.root}>An Application</h1>
        <ProductCard name="OWC Product" handleClick={this.handleClick}>
          A Description
        </ProductCard>
        <my-ce />
      </fragment>
    );
  }
}
App.tagName = 'x-app';
customElements.define('x-app', App);
