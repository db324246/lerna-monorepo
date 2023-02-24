'use strict';

const testA = require('..');
const assert = require('assert').strict;

assert.strictEqual(testA(), 'Hello from testA');
console.info('testA tests passed');
