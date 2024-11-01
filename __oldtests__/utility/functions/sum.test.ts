import {describe, expect, test} from '@jest/globals';
import {sum} from '../../../src/utility/functions/sum';

describe('sum module', () => {
  test('adds 8 + 6 to equal 14', () => {
    expect(sum(8, 6)).toBe(14);
  });
});
