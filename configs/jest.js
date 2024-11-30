import jest from 'eslint-plugin-jest';
import {setFilesIfUndef} from './util.js';

/** @type {Linter.Config[]} */
const jestConfig = [jest.configs['flat/recommended']];
export default setFilesIfUndef(jestConfig, ['**/*.{test,spec}.{js,jsx,mjs,cjs,ts,tsx}']);
