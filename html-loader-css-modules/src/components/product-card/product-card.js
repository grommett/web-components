import css from './product-card.css';
import { r } from '../../../lib/renderer';

export class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(this.render());
  }

  static get observedAttributes() {
    return ['label', 'name'];
  }

  connectedCallback() {
    css.insertInto(this.shadow);
    this.button = this.shadow.querySelector('button');
    this.handleClick && this.button.addEventListener('click', this.handleClick);
    this.productName = this.shadow.querySelector('h1');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.h1.textContent = newValue;
  }

  render() {
    return (
      <fragment>
        <h1 ref={el => (this.h1 = el)} class={css.h1}>
          {this.name || 'Product Name'}
        </h1>
        {this.source && <img src={this.source} />}
        <p>
          <slot />
        </p>
        <button class={css.button}>Buy this product</button>
      </fragment>
    );
  }
}
ProductCard.tagName = 'product-card';
customElements.define(ProductCard.tagName, ProductCard);
