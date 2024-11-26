import xoTypescript from 'eslint-config-xo-typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import baseConfig from './base.js';

/** @var {Linter.Config[]} config */
const typescriptConfig = [
	...baseConfig,

	xoTypescript,
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
			'@typescript-eslint/ban-types': [
				'error',
				{
					extendDefaults: false,
					types: {
						String: {
							message: 'Use `string` instead.',
							fixWith: 'string',
						},
						Number: {
							message: 'Use `number` instead.',
							fixWith: 'number',
						},
						Boolean: {
							message: 'Use `boolean` instead.',
							fixWith: 'boolean',
						},
						Symbol: {
							message: 'Use `symbol` instead.',
							fixWith: 'symbol',
						},
						BigInt: {
							message: 'Use `bigint` instead.',
							fixWith: 'bigint',
						},
						Object: {
							message:
								'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
							fixWith: 'Record<string, unknown>',
						},
						'{}': {
							message:
								'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
							fixWith: 'Record<string, unknown>',
						},
						object: {
							message:
								'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
							fixWith: 'Record<string, unknown>',
						},
						Function: 'Use a specific function type instead, like `() => void`.',
						'[[]]':
							"Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
						'[[[]]]': "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
						'[[[[]]]]': 'ur drunk 🤡',
						'[[[[[]]]]]': '🦄💥',
					},
				},
			],
		},
	},

	eslintPluginPrettierRecommended,
];
export default typescriptConfig;
