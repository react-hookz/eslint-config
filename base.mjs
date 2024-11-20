import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import noUseExtendNative from 'eslint-plugin-no-use-extend-native';
import unicorn from 'eslint-plugin-unicorn';
import promise from 'eslint-plugin-promise';
import _import from 'eslint-plugin-import';
import eslintComments from 'eslint-plugin-eslint-comments';
import { compat } from './eslint.config.mjs';

export default [
	...fixupConfigRules(
		compat.extends(
			'plugin:import/recommended',
			'plugin:promise/recommended',
			'plugin:unicorn/recommended',
			'xo',
			'plugin:prettier/recommended'
		)
	),
	{
		plugins: {
			'no-use-extend-native': noUseExtendNative,
			unicorn: fixupPluginRules(unicorn),
			promise: fixupPluginRules(promise),
			import: fixupPluginRules(_import),
			'eslint-comments': eslintComments,
		},

		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		rules: {
			'default-case': 'off',
			'no-use-extend-native/no-use-extend-native': 'error',

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

						application: {
							app: true,
						},

						applications: {
							apps: true,
						},

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

			'unicorn/consistent-destructuring': 'off',
			'unicorn/prefer-ternary': ['error', 'only-single-line'],
			'unicorn/filename-case': 'off',
			'function-call-argument-newline': 'off',
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

			'promise/always-return': 'off',

			'eslint-comments/disable-enable-pair': [
				'error',
				{
					allowWholeFile: true,
				},
			],

			'eslint-comments/no-aggregating-enable': 'error',
			'eslint-comments/no-duplicate-disable': 'error',
			'eslint-comments/no-unused-disable': 'error',
			'eslint-comments/no-unused-enable': 'error',
		},
	},
];
