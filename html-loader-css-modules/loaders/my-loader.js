const utils = require('loader-utils');
const path = require('path');

module.exports = function() {};

module.exports.pitch = function loader(request) {
  console.dir(utils.stringifyRequest(this, '!!' + request));
  const rawOptions = utils.getOptions(this);
  const options = `var options = ${JSON.stringify(rawOptions)};`;
  const content = `var content = require(${utils.stringifyRequest(
    this,
    '!!' + request
  )});`;

  const shadowCssLoader = `var shadowCssLoader = require(${utils.stringifyRequest(
    this,
    '!' + path.resolve(__dirname, './add-to-dom.js')
  )});`;

  const ifLocals = `if(content.locals) module.exports = content.locals;`;
  const insertInto = `module.exports.insertInto = shadowCssLoader(content, options);`;

  return options + content + shadowCssLoader + ifLocals + insertInto;
};
