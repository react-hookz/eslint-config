import * as mdx from 'eslint-plugin-mdx';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	{
		...mdx.flat,
		// optional, if you want to lint code blocks at the same
		processor: mdx.createRemarkProcessor({
			lintCodeBlocks: true,
			// optional, if you want to disable language mapper, set it to `false`
			// if you want to override the default language mapper inside, you can provide your own
			languageMapper: {},
		}),
	},
	{
		...mdx.flatCodeBlocks,
		rules: {
			...mdx.flatCodeBlocks.rules,
			// if you want to override some rules for code blocks
			'no-var': 'error',
			'prefer-const': 'error',
		},
	},
	eslintPluginPrettierRecommended,
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
];
