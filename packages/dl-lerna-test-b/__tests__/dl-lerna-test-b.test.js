'use strict';

const dlLernaTestB = require('..');
const assert = require('assert').strict;

assert.strictEqual(dlLernaTestB(), 'Hello from dlLernaTestB Hello from dlLernaTestA');
console.info('dlLernaTestB tests passed');
