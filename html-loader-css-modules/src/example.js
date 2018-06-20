class MyCE extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    const styleEl = document.createElement('style');
    styleEl.appendChild(document.createTextNode(styles));
    this.shadow.appendChild(styleEl);
  }

  connectedCallback() {
    const h3 = document.createElement('h3');
    h3.classList.add('root');
    h3.appendChild(document.createTextNode('My CE!'));
    this.shadow.appendChild(h3);
  }
}

const styles = `
.root {
  background-color: red;
}
.root button {
  background-color: aliceblue;
}
.creator .another .thins {

}
`;

customElements.define('my-ce', MyCE);
