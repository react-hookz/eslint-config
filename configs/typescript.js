import xoTypescript from 'eslint-config-xo-typescript';
import importPlugin from 'eslint-plugin-import';
import {adjustESLintConfigFiles, importConfig} from './base.js';

/** @var {Linter.Config[]} */
const typescriptConfig = [
	importPlugin.flatConfigs.typescript,
	...importConfig,

	...xoTypescript,
	{
		rules: {
			'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

			'@typescript-eslint/no-restricted-types': [
				'error',
				{
					types: {
						object: {
							message: 'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
							fixWith: 'Record<string, unknown>',
						},
						Buffer: {
							message: 'Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer',
							suggest: [
								'Uint8Array',
							],
						},
						'[]': 'Don\'t use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.',
						'[[]]': 'Don\'t use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.',
						'[[[]]]': 'Don\'t use `[[[]]]`. Use `SomeType[][][]` instead.',
						'[[[[]]]]': 'ur drunk 🤡',
						'[[[[[]]]]]': '🦄💥',
					},
				},
			],

			'@typescript-eslint/switch-exhaustiveness-check': ['error', {
				allowDefaultCaseForExhaustiveSwitch: true,
				considerDefaultExhaustiveForUnions: true,
			}],
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/promise-function-async': 'off',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'variable',
					modifiers: ['destructured'],
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

			// annoying if you need to use logical rules
			'@typescript-eslint/prefer-nullish-coalescing': 'off',

			// annoying rules
			'default-case': 'off',
			'capitalized-comments': 'off',
			'function-call-argument-newline': 'off',
		},
	},
];
export default adjustESLintConfigFiles(typescriptConfig, ['**/*.{ts,mts,cts,tsx}']);
