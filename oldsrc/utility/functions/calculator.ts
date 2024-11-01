import {add, div, mul, subs} from './mathUtils';

export const calculator = (a: number, b: number, op: string) => {
  switch (op) {
    case 'add':
      return add(a, b);
    case 'subs':
      return subs(a, b);
    case 'mul':
      return mul(a, b);
    case 'div':
      return div(a, b);
    default:
      throw new Error('Invalid Operation !');
  }
};
