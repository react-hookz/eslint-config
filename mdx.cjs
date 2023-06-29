module.exports = {
	overrides: [
		{
			files: ['*.md'],
			extends: ['plugin:mdx/recommended', 'plugin:prettier/recommended'],
			rules: {
				'prettier/prettier': ['error', { parser: 'markdown' }],
			},
		},
		{
			files: ['*.mdx'],
			extends: ['plugin:mdx/recommended', 'plugin:prettier/recommended'],
			rules: {
				'prettier/prettier': ['error', { parser: 'mdx' }],
			},
		},
	],
};
