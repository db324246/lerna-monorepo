'use strict';

const testB = require('..');
const assert = require('assert').strict;

assert.strictEqual(testB(), 'Hello from testB Hello from testA');
console.info('testB tests passed');
