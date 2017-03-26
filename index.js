'use strict';
const packageJson = require('package-json');

module.exports = name => packageJson(name, {allVersions: true})
	.then(data => new Set(Object.keys(data.versions)));
