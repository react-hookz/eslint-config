import prettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';

module.exports = [
	prettier.configs.recommended,
	jest.configs.recommended,
	{
		rules: {
			'max-nested-callbacks': ['warn', 10],
		},
	},
];
