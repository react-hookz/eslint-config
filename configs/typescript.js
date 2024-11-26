import xoTypescript from 'eslint-config-xo-typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import baseConfig from './base.js';

/** @var {Linter.Config[]} config */
const typescriptConfig = [
	...baseConfig,

	...xoTypescript,
	{
		rules: {
			'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/promise-function-async': 'off',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'variable',
					modifiers: ['destructured'],
					// eslint-disable-next-line unicorn/no-null
					format: null,
				},
				{
					selector: [
						'classProperty',
						'objectLiteralProperty',
						'typeProperty',
						'classMethod',
						'objectLiteralMethod',
						'typeMethod',
						'accessor',
						'enumMember',
					],
					// eslint-disable-next-line unicorn/no-null
					format: null,
					modifiers: ['requiresQuotes'],
				},
				{
					selector: 'variable',
					modifiers: ['const', 'global'],
					format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				},
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					disallowTypeAnnotations: true,
					fixStyle: 'inline-type-imports',
					prefer: 'type-imports',
				},
			],
		},
	},

	eslintPluginPrettierRecommended,
];
export default typescriptConfig;
