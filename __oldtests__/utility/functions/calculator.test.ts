import {describe, expect} from '@jest/globals';
import {calculator} from '../../../src/utility/functions/calculator';
import {add, div, mul, subs} from '../../../src/utility/functions/mathUtils';

jest.mock('../../../src/utility/functions/mathUtils');
describe('Calculator test cases', () => {
  test('Addition test with value and operation', () => {
    calculator(5, 6, 'add');
    expect(add).toHaveBeenCalled();
    expect(add).toHaveBeenCalledWith(5, 6);
  });

  test('Substraction test with value and operation', () => {
    calculator(10, 6, 'subs');
    expect(subs).toHaveBeenCalled();
    expect(subs).toHaveBeenCalledWith(10, 6);
  });

  test('Multiple test with value and operation', () => {
    calculator(5, 6, 'mul');
    expect(mul).toHaveBeenCalled();
    expect(mul).toHaveBeenCalledWith(5, 6);
  });

  test('divide test with value and operation', () => {
    calculator(15, 3, 'div');
    expect(div).toHaveBeenCalled();
    expect(div).toHaveBeenCalledWith(15, 3);
  });
});
