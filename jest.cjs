module.exports = {
	extends: ['plugin:jest/recommended', 'plugin:prettier/recommended'],
	rules: {
		'max-nested-callbacks': ['warn', 10],
	},
};
