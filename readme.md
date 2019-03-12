# pkg-versions [![Build Status](https://travis-ci.org/sindresorhus/pkg-versions.svg?branch=master)](https://travis-ci.org/sindresorhus/pkg-versions)

> Get the version numbers of a package from the npm registry


## Install

```
$ npm install pkg-versions
```


## Usage

```js
const pkgVersions = require('pkg-versions');

(async () => {
	console.log(await pkgVersions('ava'));
	//=> {'0.0.3', '0.0.4', …}
})();
```


## API

### pkgVersions(packageName)

Returns a `Promise<Set<string>>` with the versions.

#### packageName

Type: `string`

The name of the package to look up versions for.


## Related

- [package-json](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry
- [latest-version](https://github.com/sindresorhus/latest-version) - Get the latest version of an npm package
- [npm-keyword](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword
- [npm-user](https://github.com/sindresorhus/npm-user) - Get user info of an npm user
- [npm-email](https://github.com/sindresorhus/npm-email) - Get the email of an npm user


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
