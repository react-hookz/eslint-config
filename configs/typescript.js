import xoTypescript from 'eslint-config-xo-typescript';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { adjustESLintConfigFiles, importConfig } from './base.js';

/** @var {Linter.Config[]} */
const typescriptConfig = [
	...importConfig,
	importPlugin.flatConfigs.typescript,

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

			// annoying rules
			'default-case': 'off',
			'capitalized-comments': 'off',
			'function-call-argument-newline': 'off',

			// conflicts with prettier
			'@stylistic/object-curly-spacing': 'off',
			'@stylistic/quotes': 'off',
			'@stylistic/arrow-parens': 'off',
			'@stylistic/comma-dangle': 'off',
		},
	},

	eslintPluginPrettierRecommended,
];
export default adjustESLintConfigFiles(typescriptConfig, ['**/*.{ts,mts,ctx,tsx}']);
