'use strict';
const packageJson = require('package-json');

const pkgVersions = async packageName => {
	const {versions} = await packageJson(packageName, {allVersions: true});
	return new Set(Object.keys(versions));
};

module.exports = pkgVersions;
// TODO: Remove this for the next major release
module.exports.default = pkgVersions;
