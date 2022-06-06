import test from 'ava';
import packageVersions from './index.js';

test('main', async t => {
	const versions = await packageVersions('ava');
	t.true(versions.has('0.15.0'));
});
