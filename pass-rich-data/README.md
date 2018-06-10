# Pass Rich Data to Web Components

## Question - How do I pass rich data to my web component (`Object`, `Array`)?

Web components are HTML elements. They have properties and attributes. When an attribute can not be expressed with a `Boolean`, `Number` or `String` we need to set those values on the web component's property after we have a reference to it.

In this example I am setting the component's `ueserData` property so we can see how the component responds.

Notice that in order to set the component's property I had to first wait for the `customElements.whenDefined` promise to resolve. When composing components this is not the case. See the example [here](#link-coming-soon)

Code is [here](./custom-element.js)
