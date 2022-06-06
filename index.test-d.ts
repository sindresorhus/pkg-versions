import {expectType} from 'tsd';
import packageVersions from './index.js';

expectType<Promise<Set<string>>>(packageVersions('ava'));
