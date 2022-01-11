module.exports = {
  parser: 'eslint-mdx',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },

  extends: ['plugin:mdx/recommended'],
};
