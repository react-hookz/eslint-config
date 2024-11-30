import baseConfig from './configs/base.js';
import mdConfig from './configs/md.js';

/** @typedef {import('eslint').Linter} Linter */
/** @type {Linter.Config[]} */
const config = [{ignores: ['CHANGELOG.md', '.idea', 'node_modules']}, ...baseConfig, ...mdConfig];
export default config;
