import nodePlugin from 'eslint-plugin-n';

/** @type {Linter.Config[]} */
const nodeConfig = [
	nodePlugin.configs['flat/recommended-module'],
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'n/no-mixed-requires': [
				'error',
				{
					grouping: true,
					allowCall: true,
				},
			],
			'n/no-new-require': 'error',
			'n/no-path-concat': 'error',
			'n/process-exit-as-throw': 'error',
			'n/no-deprecated-api': 'error',
			'n/prefer-global/buffer': ['error', 'never'],
			'n/prefer-global/console': ['error', 'always'],
			'n/prefer-global/process': ['error', 'never'],
			'n/prefer-global/text-decoder': ['error', 'always'],
			'n/prefer-global/text-encoder': ['error', 'always'],
			'n/prefer-global/url-search-params': ['error', 'always'],
			'n/prefer-global/url': ['error', 'always'],
			'n/prefer-promises/dns': 'error',
			'n/prefer-promises/fs': 'error',
		},
	},
];

export default nodeConfig;
