'use strict';
const packageJson = require('package-json');

module.exports = name => packageJson(name)
	.then(data => new Set(Object.keys(data.versions)));
