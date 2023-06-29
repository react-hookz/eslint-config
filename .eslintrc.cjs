module.exports = {
	extends: ['./base.cjs'],
	overrides: [
		{
			files: ['*.md'],
			extends: ['./md.cjs'],
		},
	],
};
