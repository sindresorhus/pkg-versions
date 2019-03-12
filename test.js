import test from 'ava';
import pkgVersions from '.';

test('pkgVersions', async t => {
	const versions = await pkgVersions('ava');
	t.true(versions.has('0.15.0'));
});
