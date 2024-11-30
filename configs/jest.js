import jest from 'eslint-plugin-jest';
import {adjustESLintConfigFiles} from './base.js';

/** @type {Linter.Config[]} */
const jestConfig = [jest.configs['flat/recommended']];
export default adjustESLintConfigFiles(jestConfig, ['**/*.{test,spec}.{js,jsx,mjs,cjs,ts,tsx}']);
