'use strict';
const testA = require('test-a')
module.exports = testB;

function testB() {
  return 'Hello from testB ' + testA();
}
console.log(testB())