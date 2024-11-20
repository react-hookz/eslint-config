import baseCopy from './baseCopy.cjs';
import mdCopy from './mdCopy.cjs';
import mdxCopy from './mdxCopy.cjs';

export default [
	{
		files: ['*.js', '*.cjs', '*.mjs'],
		...baseCopy,
	},
	{
		files: ['*.md'],
		...mdCopy,
	},
	{
		files: ['*.mdx'],
		...mdxCopy,
	},
];
