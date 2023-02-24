'use strict';
const dlLernaTestA = require('dl-lerna-test-a')
module.exports = dlLernaTestB;

function dlLernaTestB() {
  return 'Hello from dlLernaTestB ' + dlLernaTestA();
}
