import {describe, expect} from '@jest/globals';
import {fetchData} from '../../../src/utility/functions/fetchData';

describe('Fetch data test::', () => {
  test('resolved with dot then', () => {
    return fetchData().then(res => {
      expect(res).toBe('resolved');
    });
  });

  test('resolved with async await', async () => {
    const data = await fetchData();
    expect(data).toBe('resolved');
  });
});
