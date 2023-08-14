module.exports = {
	extends: [
		'plugin:import/recommended',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		'xo',
		'plugin:prettier/recommended',
	],
	plugins: ['no-use-extend-native', 'unicorn', 'promise', 'import', 'eslint-comments'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-use-extend-native/no-use-extend-native': 'error',

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

		'function-call-argument-newline': 'off',

		'import/default': 'error',
		'import/export': 'error',
		'import/extensions': [
			'error',
			'always',
			{
				ignorePackages: true,
			},
		],
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
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
				'newlines-between': 'never',
				warnOnUnassignedImports: true,
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

		// Promise, if placed in the end of the chain may viably have no return statement.
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
};
