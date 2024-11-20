import n from 'eslint-plugin-n';
import { compat } from './eslint.config.mjs';

export default [
	...compat.extends('plugin:prettier/recommended'),
	{
		plugins: {
			n,
		},

		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		rules: {
			'n/file-extension-in-import': [
				'error',
				'always',
				{
					'.ts': 'never',
					'.tsx': 'never',
					'.mts': 'never',
					'.cts': 'never',
				},
			],

			'n/no-mixed-requires': [
				'error',
				{
					grouping: true,
					allowCall: true,
				},
			],

			'n/no-new-require': 'error',
			'n/no-path-concat': 'error',
			'n/process-exit-as-throw': 'error',
			'n/no-deprecated-api': 'error',
			'n/prefer-global/buffer': ['error', 'never'],
			'n/prefer-global/console': ['error', 'always'],
			'n/prefer-global/process': ['error', 'never'],
			'n/prefer-global/text-decoder': ['error', 'always'],
			'n/prefer-global/text-encoder': ['error', 'always'],
			'n/prefer-global/url-search-params': ['error', 'always'],
			'n/prefer-global/url': ['error', 'always'],
			'n/prefer-promises/dns': 'error',
			'n/prefer-promises/fs': 'error',
		},
	},
];
