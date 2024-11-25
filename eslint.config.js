import baseConfig from './configs/base.js';
import mdConfig from './configs/md.js';

export default [{ ignores: ['CHANGELOG.md', '.idea', 'node_modules'] }, ...baseConfig, ...mdConfig];
