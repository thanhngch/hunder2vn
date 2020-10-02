import {
  number2vn,
} from '../src/index';

it('Test from 0 to 10', () => {
  expect(number2vn(0)).toBe('không');
  expect(number2vn(1)).toBe('một');
  expect(number2vn(2)).toBe('hai');
  expect(number2vn(3)).toBe('ba');
  expect(number2vn(4)).toBe('bốn');
  expect(number2vn(5)).toBe('năm');
  expect(number2vn(6)).toBe('sáu');
  expect(number2vn(7)).toBe('bảy');
  expect(number2vn(8)).toBe('tám');
  expect(number2vn(9)).toBe('chín');
  expect(number2vn(10)).toBe('mười');
});

it('Test from negetive number', () => {
  expect(number2vn(-1)).toBe('âm một');
});

it('Test from 11 to 19', () => {
  expect(number2vn(11)).toBe('mười một');
  expect(number2vn(12)).toBe('mười hai');
  expect(number2vn(13)).toBe('mười ba');
  expect(number2vn(14)).toBe('mười bốn');
  expect(number2vn(15)).toBe('mười lăm');
  expect(number2vn(16)).toBe('mười sáu');
  expect(number2vn(17)).toBe('mười bảy');
  expect(number2vn(18)).toBe('mười tám');
  expect(number2vn(19)).toBe('mười chín');
});
