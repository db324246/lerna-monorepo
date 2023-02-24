'use strict';

const testB = require('..');
const assert = require('assert').strict;

assert.strictEqual(testB(), 'Hello from testB');
console.info('testB tests passed');
