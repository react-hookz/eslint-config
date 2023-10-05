module.exports = {
	overrides: [
		{
			files: ['*.js', '*.cjs', '*.mjs'],
			extends: ['./base.cjs'],
		},
		{
			files: ['*.md'],
			extends: ['./md.cjs'],
		},
		{
			files: ['*.mdx'],
			extends: ['./mdx.cjs'],
		},
	],
};
