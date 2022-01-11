module.exports = {
  parser: '@typescript-eslint/parser',
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

  extends: ['./base', './typescript', 'airbnb-typescript', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier', 'react'],

  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.tx', '.tsx'],
      },
    ],

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
