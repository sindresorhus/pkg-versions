import {expectType} from 'tsd';
import pkgVersions = require('.');

expectType<Promise<Set<string>>>(pkgVersions('ava'));
