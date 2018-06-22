function createStyleElement(list) {
  const styleStringIndex = 1;
  const styleString = canShadowDOM()
    ? list[0][styleStringIndex]
    : list[0][styleStringIndex].replace(/:host/g, ':root');
  const style = document.createTextNode(styleString);
  const styleEl = document.createElement('style');
  styleEl.appendChild(style);
  return styleEl;
}

function canShadowDOM() {
  return (
    (document.head.createShadowRoot || document.head.attachShadow) &&
    !window.ShadyDOM
  );
}

module.exports = function(list) {
  return function(el) {
    const styleEl = createStyleElement(list);
    (el || document.head).appendChild(styleEl);
  };
};
