module.exports = {
	extends: ['xo-react', 'plugin:prettier/recommended'],
	rules: {
		// While using ts with `react-jsx` preset - there
		// is no need in importing react in each file
		'react/react-in-jsx-scope': 'off',

		// There is no sense in using prop-types with ts
		'react/require-default-props': 'off',
	},
};
