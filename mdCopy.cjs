import mdx from 'eslint-plugin-mdx';
import prettier from 'eslint-plugin-prettier';

module.exports = [
	mdx.configs.recommended,
	prettier.configs.recommended,
	{
		rules: {
      'prettier/prettier': ['error', { parser: 'markdown' }],
		},
	},
];
