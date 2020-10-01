import {
  number2vn,
} from '../src/index';

it('Test from 1000 to 1010', () => {
  expect(number2vn(1000)).toBe('một nghìn');
  expect(number2vn(1001)).toBe('một nghìn lẻ một');
  expect(number2vn(1002)).toBe('một nghìn lẻ hai');
  expect(number2vn(1005)).toBe('một nghìn lẻ năm');
  expect(number2vn(1010)).toBe('một nghìn lẻ mười');
});

it('Test from 1011 to 1012', () => {
  expect(number2vn(1011)).toBe('một nghìn mười một');
  expect(number2vn(1012)).toBe('một nghìn mười hai');
});

it('Test from 2000 to 2099', () => {
  expect(number2vn(2000)).toBe('hai nghìn');
  expect(number2vn(2001)).toBe('hai nghìn lẻ một');
  expect(number2vn(2002)).toBe('hai nghìn lẻ hai');
  expect(number2vn(2003)).toBe('hai nghìn lẻ ba');
  expect(number2vn(2004)).toBe('hai nghìn lẻ bốn');
  expect(number2vn(2010)).toBe('hai nghìn lẻ mười');
  expect(number2vn(2019)).toBe('hai nghìn mười chín');
  expect(number2vn(2020)).toBe('hai nghìn hai mươi');
  expect(number2vn(2021)).toBe('hai nghìn hai mươi mốt');
});
