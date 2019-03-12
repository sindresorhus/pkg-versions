/**
 * Get the version numbers of a package from the npm registry.
 *
 * @param name - The name of the package to look up versions for.
 * @returns A [`Set`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set) of versions.
 */
export default function pkgVersions(name: string): Promise<Set<string>>;
