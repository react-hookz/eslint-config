module.exports = {
  extends: ['./base'],

  overrides: [
    {
      files: ['*.md', '*.mdx'],
      extends: ['plugin:mdx/recommended', 'plugin:mdx/overrides', 'plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': [
          2,
          {
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
            parser: 'markdown',
          },
        ],
      },
    },
    {
      files: '**/*.{md,mdx}/**',
      extends: 'plugin:mdx/code-blocks',
    },
  ],
};
