import {
  hunder2vn,
  number2vn,
} from '../src/index';

it('Test error hunder2vn', () => {
  expect(hunder2vn.bind(null, 1000)).toThrow(Error);
});

it('Test error hunder2vn', () => {
  // wrong parameter type
  expect(number2vn.bind(null, new Date())).toThrow(Error);
  // large number check
  expect(number2vn.bind(null, Number.MAX_SAFE_INTEGER + 1)).toThrow(Error);
  // double number check
  expect(number2vn.bind(null, 10.2)).toThrow(Error);
});
