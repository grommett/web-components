# Composing Components

## Question - How do I compose components?

In this example I'm composing three different components to make up a product list. This is pretty close to a simple application set up. Using the new `<script type="module">` I'm able to import without bundling.

The style set up is a bit strange, and admittedly there is probably a better way. The trick here is getting it work both in browsers that suppport `shadow DOM` and those (Firefox) that don't.

HTML is [here](./index.html)
Code is [`product-app`](./product-app.js), [`product-card`](./product-app.js) and [`custom-button`](./custom-button.js),
