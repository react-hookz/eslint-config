module.exports = {
  extends: ['./base'],
  ignorePatterns: ['node_modules', '.github/workflows', '.husky', 'CHANGELOG.md'],

  overrides: [
    {
      files: ['*.md', '*.mdx'],
      extends: ['./mdx'],
    },
  ],
};
