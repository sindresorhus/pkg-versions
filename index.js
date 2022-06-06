import packageJson from 'package-json';

export default async function packageVersions(packageName) {
	const {versions} = await packageJson(packageName, {allVersions: true});
	return new Set(Object.keys(versions));
}
