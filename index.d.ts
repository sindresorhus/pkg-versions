/**
 * Get the version numbers of a package from the npm registry.
 *
 * @returns The version numbers.
 */
export default function pkgVersions(packageName: string): Promise<Set<string>>;
