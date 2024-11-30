/**
 * Set configs file patters in case config does not have one.
 *
 * @param {Linter.Config[]} configs
 * @param {string[]} files
 * @return {Linter.Config[]}
 */
export function setFilesIfUndef(configs, files) {
	return configs.map(cfg => ({files, ...cfg}));
}

/**
 * Collects the list of all rules from the given configs and disables
 * them all.
 *
 * This function is useful for gradual application of config on large
 * codebases. As eslint not allowing to reduce the list of rules fixing
 * performed.
 *
 * @param {Linter.Config[]} configs
 * @param {string[]} except
 * @return {Linter.RulesRecord}
 */
export function disableAllRules(configs, except = []) {
	const rules = {};

	for (const config of configs) {
		for (const rule in config.rules ?? {}) {
			if (except.includes(rule)) {
				continue;
			}

			rules[rule] = 'off';
		}
	}

	return rules;
}
