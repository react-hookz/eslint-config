import prettier from 'eslint-plugin-prettier';
import n from 'eslint-plugin-n';

module.exports = [
	prettier.configs.recommended,
	n,
	{
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
	{
		rules: {
			// We have this enabled in addition to `import/extensions` as this one has an auto-fix.
			'n/file-extension-in-import': [
				'error',
				'always',
				{
					// TypeScript doesn't yet support using extensions and fails with error TS2691.
					'.ts': 'never',
					'.tsx': 'never',
					'.mts': 'never',
					'.cts': 'never',
				},
			],
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
