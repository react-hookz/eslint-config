module.exports = {
	overrides: [
		{
			files: ['*.js', '*.cjs', '*.mjs'],
			extends: ['./baseCopy.cjs'],
		},
		{
			files: ['*.md'],
			extends: ['./mdCopy.cjs'],
		},
		{
			files: ['*.mdx'],
			extends: ['./mdxCopy.cjs'],
		},
	],
};
