const prettierCfg = {
  printWidth: 100,
  tabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  endOfLine: 'lf',
  tabWidth: 2,
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  proseWrap: 'always',
};

module.exports = {
  extends: ['plugin:mdx/recommended', 'plugin:prettier/recommended'],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },

  settings: {
    'mdx/code-blocks': false,
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierCfg,
        parser: 'mdx',
      },
    ],
  },

  overrides: [
    {
      files: ['*.md'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            ...prettierCfg,
            parser: 'markdown',
          },
        ],
      },
    },
  ],
};
