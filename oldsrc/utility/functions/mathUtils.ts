const add = (a: number, b: number) => {
  return a + b;
};
const subs = (a: number, b: number) => {
  return a - b;
};
const mul = (a: number, b: number) => {
  return a * b;
};
const div = (a: number, b: number) => {
  if (b == 0) {
    throw new Error('Cannot be devide by 0!');
  }
  return a / b;
};

export {add, subs, mul, div};
