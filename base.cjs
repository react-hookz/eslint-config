module.exports = {
	extends: [
		'plugin:import/recommended',
		'plugin:promise/recommended',
		'xo',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'import/no-useless-path-segments': 'error',
	},
};
