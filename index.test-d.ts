import {expectType} from 'tsd-check';
import pkgVersions from '.';

expectType<Promise<Set<string>>>(pkgVersions('ava'));
