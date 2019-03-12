'use strict';

const packageJson = require('package-json');

const pkgVersions = async name => {
	const {versions} = await packageJson(name, {allVersions: true});
	return new Set(Object.keys(versions));
};

module.exports = pkgVersions;
module.exports.default = pkgVersions;
