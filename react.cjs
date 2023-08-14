module.exports = {
	extends: ['xo-react', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		// While using ts with `react-jsx` preset - there
		// is no need in importing react in each file
		'react/react-in-jsx-scope': 'off',

		// There is no sense in using prop-types within ts projects
		'react/require-default-props': 'off',
		'react/no-unused-prop-types': 'off',
		'react/prop-types': 'off',
	},
};
