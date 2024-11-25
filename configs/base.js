import js from '@eslint/js';
import xo from 'eslint-config-xo';
import importPlugin from 'eslint-plugin-import';
import eslintPluginNoUseExtendNative from 'eslint-plugin-no-use-extend-native';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginPromise from 'eslint-plugin-promise';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

const baseConfig = [
	js.configs.recommended,

	importPlugin.flatConfigs.recommended,
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'import/default': 'error',
			'import/export': 'error',
			'import/extensions': ['error', 'ignorePackages'],
			'import/first': 'error',

			'import/namespace': [
				'error',
				{
					allowComputed: true,
				},
			],
			'import/no-absolute-path': 'error',
			'import/no-anonymous-default-export': 'error',
			'import/no-named-default': 'error',
			'import/no-webpack-loader-syntax': 'error',
			'import/no-self-import': 'error',
			'import/no-cycle': [
				'error',
				{
					ignoreExternal: true,
				},
			],
			'import/no-useless-path-segments': 'error',
			'import/newline-after-import': 'error',
			'import/no-amd': 'error',
			'import/no-duplicates': [
				'error',
				{
					'prefer-inline': true,
				},
			],
			'import/no-empty-named-blocks': 'error',
			'import/no-extraneous-dependencies': [
				'error',
				{
					includeTypes: true,
				},
			],
			'import/no-mutable-exports': 'error',
			'import/no-named-as-default-member': 'error',
			'import/no-named-as-default': 'error',
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
						'object',
						'type',
					],
					'newlines-between': 'never',
					warnOnUnassignedImports: true,
					alphabetize: {
						order: 'asc',
						orderImportKind: 'asc',
					},
				},
			],
			'import/no-unassigned-import': [
				'error',
				{
					allow: [
						'@babel/polyfill',
						'**/register',
						'**/register.*',
						'**/register/**',
						'**/register/**.*',
						'**/*.css',
						'**/*.scss',
						'**/*.sass',
						'**/*.less',
					],
				},
			],
		},
	},

	pluginPromise.configs['flat/recommended'],
	{
		rules: {
			// Promise, being placed in the end of the chain may viably have no return statement.
			'promise/always-return': 'off',
		},
	},

	eslintPluginNoUseExtendNative.configs.recommended,

	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			'unicorn/prevent-abbreviations': [
				'error',
				{
					checkFilenames: false,
					checkDefaultAndNamespaceImports: false,
					checkShorthandImports: false,
					extendDefaultReplacements: false,
					replacements: {
						whitelist: {
							include: true,
						},
						blacklist: {
							exclude: true,
						},
						master: {
							main: true,
						},
						slave: {
							secondary: true,
						},
						props: {
							properties: false,
						},
						params: {
							parameters: false,
						},
						el: {
							elt: true,
							element: true,
						},
						elt: {
							element: false,
						},
						req: {
							request: false,
						},
						res: {
							resp: true,
							response: true,
							result: true,
						},
						resp: {
							response: false,
						},
						str: {
							string: false,
						},

						// Not part of `eslint-plugin-unicorn`
						application: {
							app: true,
						},
						applications: {
							apps: true,
						},

						// Part of `eslint-plugin-unicorn`
						arr: {
							array: true,
						},
						e: {
							error: true,
							event: true,
						},
						elem: {
							element: true,
						},
						len: {
							length: true,
						},
						msg: {
							message: true,
						},
						num: {
							number: true,
						},
						obj: {
							object: true,
						},
						opts: {
							options: true,
						},
						param: {
							parameter: true,
						},
						prev: {
							previous: true,
						},

						ret: {
							returnValue: true,
						},
						temp: {
							temporary: true,
						},
						tmp: {
							temporary: true,
						},
						val: {
							value: true,
						},
						err: {
							error: false,
						},
					},
				},
			],

			'unicorn/no-useless-undefined': 'off',

			'unicorn/better-regex': [
				'error',
				{
					sortCharacterClasses: false,
				},
			],

			// Disabled for now until it becomes more stable:
			// https://github.com/sindresorhus/eslint-plugin-unicorn/search?q=consistent-destructuring+is:issue&state=open&type=issues
			'unicorn/consistent-destructuring': 'off',

			'unicorn/prefer-ternary': ['error', 'only-single-line'],

			// It is up to app to decide file name casing.
			'unicorn/filename-case': 'off',
		},
	},

	...xo,
	{
		rules: {
			// annoying rules
			'default-case': 'off',
			'capitalized-comments': 'off',
			'function-call-argument-newline': 'off',

			// conflicts with prettier
			'@stylistic/object-curly-spacing': 'off',
			'@stylistic/quotes': 'off',
		},
	},
	eslintPluginPrettierRecommended,
];

export default baseConfig;
