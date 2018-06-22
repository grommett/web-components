module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
