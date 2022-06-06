/**
Get the version numbers of a package from the npm registry.

@returns The version numbers.

@example
```
import packageVersions from 'pkg-versions';

console.log(await packageVersions('ava'));
//=> {'0.0.3', '0.0.4', …}
```
*/
export default function packageVersions(packageName: string): Promise<Set<string>>;
