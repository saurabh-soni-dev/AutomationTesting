import {describe, test} from '@jest/globals';
import {addToArray} from '../../../src/utility/functions/setupAndteardown';
describe('SETUP AND TEARDOWN', () => {
  let testArray: any;

  beforeAll(() => {
    console.log('BeforeAll:: Initialize Empty Array');
    testArray = [];
  });

  afterAll(() => {
    console.log('AfterAll:: Clear Array');
    testArray = null;
  });

  beforeEach(() => {
    console.log('BeforeEach:: ');
    testArray = [];
  });

  afterEach(() => {
    console.log('afterEach::', testArray);
  });

  test('add item to array', () => {
    addToArray(testArray, 'saurabh');
    expect(testArray).toContain('saurabh');
  });
});
