class CustomElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.pElement = document.createElement('p');
    this.ul = document.createElement('ul');
    this.pElement.textContent = 'User Data:';

    shadow.appendChild(this.pElement);
    shadow.appendChild(this.ul);
  }

  set user(data) {
    this.update(data);
  }

  update(data) {
    this.ul.innerHTML = `
    <li>Name: ${data.name}</li>
    <li>Title: ${data.title}</li>
    <li>Email Addres: ${data.emailAddress}</li>`;
  }
}

customElements.define('custom-element', CustomElement);
