import {describe, test, expect, it, jest} from '@jest/globals';

describe('object comparision', () => {
  test('object assignment', () => {
    const data: any = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('null values:', () => {
    const val = null;
    expect(val).toBeNull();
    expect(val).toBeDefined();
    expect(val).not.toBeUndefined();
    expect(val).not.toBeTruthy();
    expect(val).toBeFalsy();
  });

  test('Zero values:', () => {
    const val = 0;
    expect(val).not.toBeNull();
    expect(val).toBeDefined();
    expect(val).not.toBeUndefined();
    expect(val).not.toBeTruthy();
    expect(val).toBeFalsy();
  });

  test('Number values', () => {
    const num = 10;
    expect(num).toBeLessThan(12);
    expect(num).toBeLessThanOrEqual(10);

    expect(num).toBeGreaterThan(8);
    expect(num).toBeGreaterThanOrEqual(10);

    expect(num).toBe(10);
    expect(num).toEqual(10);
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);
    expect(value).toBeCloseTo(0.3);
  });

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  test.only('drinks return',()=>{
    const drink = jest.fn(()=> true)
    drink()
    expect(drink).toHaveReturnedWith(true)
  })
});
