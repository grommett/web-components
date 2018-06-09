class HelloWorld extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const pElement = document.createElement('p');
    const styleElement = document.createElement('style');

    styleElement.textContent = `p {
        font-family: Arial; 
        color: red;
        }`;
    pElement.textContent = 'Hello World!';

    shadow.appendChild(styleElement);
    shadow.appendChild(pElement);
  }
}
customElements.define('hello-world', HelloWorld);
