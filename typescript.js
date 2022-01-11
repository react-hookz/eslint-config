module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },

  extends: [
    'plugin:import/typescript',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
