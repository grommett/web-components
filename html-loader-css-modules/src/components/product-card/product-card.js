import css from './product-card.css';
import theme from '../../theme.css';
import { r } from '../../../lib/renderer'; // jsx handler

export class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    css.insertInto(this.shadow);
    theme.insertInto(this.shadow);
    this.shadow.appendChild(this.render());
    this.button = this.shadow.querySelector('button');
    this.productName = this.shadow.querySelector('h1');
    this.img = this.shadow.querySelector('img');
    this.onClick = this.onClick.bind(this);
  }

  static get observedAttributes() {
    return ['label', 'name', 'source'];
  }

  connectedCallback() {
    this.handleClick &&
      this.button.addEventListener('click', this.onClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onClick);
  }

  onClick() {
    this.handleClick && this.handleClick(this.sku);
  }

  attributeChangedCallback(name, _, newValue) {
    switch (name) {
      case 'name':
        this.h1.textContent = newValue;
        break;
      case 'label':
        this.button.textContent = newValue;
        break;
      case 'source':
        this.img.setAttribute('src', newValue);
        break;
    }
  }

  render() {
    const { h2, font, button } = theme;
    const { img } = css;
    return (
      <fragment>
        <h2 ref={el => (this.h1 = el)} class={h2}>
          {this.name}
        </h2>
        <img class={img} src={this.source} />
        <p class={font}>
          <slot />
        </p>
        <button class={button}>Buy this product</button>
      </fragment>
    );
  }
}
ProductCard.tagName = 'product-card';
customElements.define(ProductCard.tagName, ProductCard);
