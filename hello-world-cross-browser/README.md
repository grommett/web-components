# Hello World with polyfill

## Question - How do I render a simple web component cross browser?

Continuing with the barebones set up we'll add a polyfill to make our component work across all browsers. Additionally, we'll move our `hello-world` element into its own file.

The Web Component polyfills can be found [here](https://github.com/webcomponents/webcomponentsjs). In this case I'm using the `webcomponents-loader.js`. This polyfill feature detects what's needed and _only_ adds polyfill(s) if neccessary. In order for it to work I had to listen for the `WebComponentsReady` event when loading it from a CDN.

Vanilla JS, with polyfills, no imports.

Browser Requirements:

- Evergreen
