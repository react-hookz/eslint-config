import * as mdx from 'eslint-plugin-mdx';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {Linter.Config[]} */
const mdConfig = [
	{
		...mdx.flat,
		// Optional, if you want to lint code blocks at the same
		processor: mdx.createRemarkProcessor({
			lintCodeBlocks: true,
			// Optional, if you want to disable language mapper, set it to `false`
			// if you want to override the default language mapper inside, you can provide your own
			languageMapper: {},
		}),
	},
	{
		...mdx.flatCodeBlocks,
		rules: {
			...mdx.flatCodeBlocks.rules,
			// If you want to override some rules for code blocks
			'no-var': 'error',
			'prefer-const': 'error',
			'import/no-unresolved': 'off',
			'import/no-anonymous-default-export': 'off',
		},
	},
	{
		...eslintPluginPrettierRecommended,
		files: ['**/*.{md,mdx}'],
	},
	{
		files: ['**/*.md'],
		rules: {
			'prettier/prettier': ['error', { parser: 'markdown' }],
		},
	},
	{
		files: ['**/*.mdx'],
		rules: {
			'prettier/prettier': ['error', { parser: 'mdx' }],
		},
	},
];

export default mdConfig;
