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

function addProps(node, props) {
  if (!props) return node;
  Object.keys(props).forEach(addProp.bind(null, node, props));
  return node;
}

function addProp(node, props, prop) {
  const event = prop.slice(2).toLowerCase();
  switch (true) {
    case isPrimitive(props[prop]):
      node.setAttribute(prop, props[prop]);
      node[prop] = props[prop];
      break;
    case isEvent(prop):
      node.addEventListener(event, props[prop]);
      break;
    case prop === 'ref':
      props[prop](node);
      break;
    default:
      node[prop] = props[prop];
  }
}

function addChildren(node, children) {
  children.forEach(addChild.bind(null, node));
  return node;
}

function addChild(node, child) {
  switch (true) {
    case isPrimitive(child):
      node.appendChild(document.createTextNode(child));
      break;
    case Array.isArray(child):
      addChildren(node, child);
      break;
    default:
      child && node.appendChild(child);
  }
}

function isPrimitive(prop) {
  return (
    typeof prop === 'string' ||
    typeof prop === 'boolean' ||
    typeof prop === 'number'
  );
}

function isEvent(prop) {
  return /^on/.test(prop);
}
