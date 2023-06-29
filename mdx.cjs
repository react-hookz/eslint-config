module.exports = {
	extends: ['plugin:mdx/recommended', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': ['error', { parser: 'mdx' }],
	},
};
