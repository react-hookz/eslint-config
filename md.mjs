import { compat } from './eslint.config.mjs';

export default [
	...compat.extends('plugin:mdx/recommended', 'plugin:prettier/recommended'),
	{
		rules: {
			'prettier/prettier': [
				'error',
				{
					parser: 'markdown',
				},
			],
		},
	},
];
