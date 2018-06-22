# Conditional Render

## Question - Can I use JSX and style loaders with web components?

In an attempt to reduce boilerplate, in this example I wanted to see what it would take to use JSX to create the markup for web components.

Since I was using webpack I decided to use `css-loader` and `style-loader`. To my surprise, `style-loader` does not support the ability to allow the importing file decide where the `style` tag is inserted. This breaks for Custom Elements which use a shadow DOM. In order to fix this I wrote a [not-so-production-ready loader](./loaders) that allows the importing file to decide where the `style` tag is inserted.

- [Application Code](./src/app.js)
- [Product Card Code](./components/product-card/product-card.js)
- [JSX transformer](./lib/renderer.js)
- [Loader](./loaders)
- [HTML](./index.html)
