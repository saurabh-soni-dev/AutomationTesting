const add = jest.fn((a, b) => a + b);
const subs = jest.fn((a, b) => a - b);
const mul = jest.fn((a, b) => a * b);
const div = jest.fn((a, b) => a / b);

module.exports = {add, subs, mul, div};
