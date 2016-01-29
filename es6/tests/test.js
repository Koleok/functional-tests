import {
  run
}
from './shared'

describe('all tests', () => {
  describe('unit tests', () => {
    run({
      name: 'helpers',
      type: 'unit'
    });
  });

  describe('integration tests', () => {});
});
