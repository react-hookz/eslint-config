module.exports = {
  extends: ['plugin:mdx/recommended', 'plugin:prettier/recommended'],

  overrides: [
    {
      files: ['*.md'],
      rules: {
        'prettier/prettier': ['error', { parser: 'markdown' }],
      },
    },
    {
      files: ['*.mdx'],
      rules: {
        'prettier/prettier': ['error', { parser: 'mdx' }],
      },
    },
  ],
};
