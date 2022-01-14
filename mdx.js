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
            parser: 'markdown',
          },
        ],
      },
    },
  ],
};
