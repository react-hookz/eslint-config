const PRINT_WIDTH = 100;

module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: PRINT_WIDTH,
        tabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        endOfLine: 'lf',
        tabWidth: 2,
        bracketSpacing: true,
        bracketSameLine: true,
        arrowParens: 'always',
      },
    ],
  },
};
