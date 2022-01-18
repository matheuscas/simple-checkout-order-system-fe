module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'react/jsx-filename-extension': 'off',
    //You can override any rules you want
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
};
