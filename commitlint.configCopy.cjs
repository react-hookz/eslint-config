import commitlint from '@commitlint/config-conventional';

module.exports = [
	commitlint,
	{
		rules: {
			'footer-max-line-length': [1, 'always', 72],
		},
	},
];
