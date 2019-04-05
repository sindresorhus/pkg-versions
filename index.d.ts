declare const pkgVersions: {
	/**
	Get the version numbers of a package from the npm registry.

	@returns The version numbers.

	@example
	```
	import pkgVersions = require('pkg-versions');

	(async () => {
		console.log(await pkgVersions('ava'));
		//=> {'0.0.3', '0.0.4', …}
	})();
	```
	*/
	(packageName: string): Promise<Set<string>>;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function pkgVersions(packageName: string): Promise<Set<string>>;
	// export = pkgVersions;
	default: typeof pkgVersions;
};

export = pkgVersions;
