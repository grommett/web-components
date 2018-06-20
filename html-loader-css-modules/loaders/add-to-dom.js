function createStyleElement(list) {
  const styleStringIndex = 1;
  const style = document.createTextNode(list[0][styleStringIndex]);
  const styleEl = document.createElement('style');
  styleEl.appendChild(style);
  return styleEl;
}

module.exports = function(list, options) {
  return function(el) {
    const styleEl = createStyleElement(list);
    (el || document.head).appendChild(styleEl);
  };
};
