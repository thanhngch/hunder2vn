import {
  number2vn,
} from '../src/index';

it('Test from 20 to 29', () => {
  expect(number2vn(20)).toBe('hai mươi');
  expect(number2vn(21)).toBe('hai mươi mốt');
  expect(number2vn(22)).toBe('hai mươi hai');
  expect(number2vn(23)).toBe('hai mươi ba');
  expect(number2vn(24)).toBe('hai mươi bốn');
  expect(number2vn(25)).toBe('hai mươi lăm');
  expect(number2vn(26)).toBe('hai mươi sáu');
  expect(number2vn(27)).toBe('hai mươi bảy');
  expect(number2vn(28)).toBe('hai mươi tám');
  expect(number2vn(29)).toBe('hai mươi chín');
});

it('Test from 20 to 29', () => {
  const configs = {
    short: true,
  };
  expect(number2vn(20, configs)).toBe('hai mươi');
  expect(number2vn(21, configs)).toBe('hai mốt');
  expect(number2vn(22, configs)).toBe('hai hai');
  expect(number2vn(23, configs)).toBe('hai ba');
  expect(number2vn(24, configs)).toBe('hai bốn');
  expect(number2vn(25, configs)).toBe('hai lăm');
  expect(number2vn(26, configs)).toBe('hai sáu');
  expect(number2vn(27, configs)).toBe('hai bảy');
  expect(number2vn(28, configs)).toBe('hai tám');
  expect(number2vn(29, configs)).toBe('hai chín');
});

it('Test from 4, 14, 24, 34, 44', () => {
  const configs = {
    short: true,
    four: 'tư',
  };
  expect(number2vn(4, configs)).toBe('bốn');
  expect(number2vn(14, configs)).toBe('mười bốn');
  expect(number2vn(24, configs)).toBe('hai tư');
  expect(number2vn(34, configs)).toBe('ba tư');
  expect(number2vn(44, configs)).toBe('bốn tư');
});

it('Test from 31, 41, 51, 91', () => {
  const configs = {
    short: true,
  };
  expect(number2vn(31, configs)).toBe('ba mốt');
  expect(number2vn(41, configs)).toBe('bốn mốt');
  expect(number2vn(51, configs)).toBe('năm mốt');
  expect(number2vn(91, configs)).toBe('chín mốt');
});

it('Test from 35, 45, 55, 95', () => {
  const configs = {
    short: true,
  };
  expect(number2vn(35, configs)).toBe('ba lăm');
  expect(number2vn(45, configs)).toBe('bốn lăm');
  expect(number2vn(55, configs)).toBe('năm lăm');
  expect(number2vn(95, configs)).toBe('chín lăm');
});
