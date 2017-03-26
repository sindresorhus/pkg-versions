import test from 'ava';
import m from '.';

test(async t => {
	const versions = await m('ava');
	t.true(versions.has('0.15.0'));
});
