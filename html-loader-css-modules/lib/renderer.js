export function r(el, props, ...children) {
  const fragment = document.createDocumentFragment();
  let node = addProps(createElement(el), props);
  node = addChildren(node, children);
  fragment.appendChild(node);
  return fragment;
}

function createElement(el) {
  switch (true) {
    case el === 'fragment':
      return document.createDocumentFragment();
    case typeof el !== 'string' && typeof el.tagName === 'string':
      return document.createElement(el.tagName);
    default:
      return document.createElement(el);
  }
}

function addProps(node, props = {}) {
  if (!props) return node;
  Object.keys(props).forEach(prop => {
    if (isPrimitive(props[prop])) {
      node.setAttribute(prop, props[prop]);
    } else {
      if (isEvent(prop)) {
        const event = prop.slice(2).toLowerCase();
        node.addEventListener(event, props[prop]);
      } else {
        if (prop === 'ref') {
          props[prop](node);
        } else {
          node[prop] = props[prop];
        }
      }
    }
  });
  return node;
}

function addChildren(node, children) {
  children.forEach(child => {
    if (isPrimitive(child)) {
      node.appendChild(document.createTextNode(child));
    } else {
      if (Array.isArray(child)) {
        addChildren(node, child);
      } else {
        child && node.appendChild(child);
      }
    }
  });
  return node;
}

function isPrimitive(prop) {
  return (
    (typeof prop === 'string') |
    (typeof prop === 'boolean') |
    (typeof prop === 'number')
  );
}

function isEvent(prop) {
  return /^on/.test(prop);
}
