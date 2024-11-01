import {describe, expect, test} from '@jest/globals';
import {checkEvenOdd} from '../../../src/utility/functions/checkEvenOdd';

describe('Even or Odd Number', () => {
  test('check even and odd number', () => {
    expect(checkEvenOdd(4)).toBe('4 is the even number.');
    expect(checkEvenOdd(3)).not.toBe('3 is the even number.');
  });
});
