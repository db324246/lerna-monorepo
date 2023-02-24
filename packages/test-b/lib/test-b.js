'use strict';
const testA = require('@dl-lerna/test-a')
module.exports = testB;

function testB() {
  return 'Hello from testB ' + testA();
}