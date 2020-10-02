import {
  number2vn,
} from '../src/index';

it('Test from 100 to 110', () => {
  expect(number2vn(100)).toBe('một trăm');
  expect(number2vn(101)).toBe('một trăm lẻ một');
  expect(number2vn(102)).toBe('một trăm lẻ hai');
  expect(number2vn(105)).toBe('một trăm lẻ năm');
  expect(number2vn(110)).toBe('một trăm mười');
});

it('Test from 101, 102, 105, 100 with config', () => {
  const config = {
    zero: 'linh',
  };
  expect(number2vn(101, config)).toBe('một trăm linh một');
  expect(number2vn(102, config)).toBe('một trăm linh hai');
  expect(number2vn(105, config)).toBe('một trăm linh năm');
  expect(number2vn(110, config)).toBe('một trăm mười');
});

it('Test from 115, 125, 144, 150 with config', () => {
  const config = {
    short: true,
  };
  expect(number2vn(115, config)).toBe('một trăm mười lăm');
  expect(number2vn(125, config)).toBe('một trăm hai lăm');
  expect(number2vn(144, config)).toBe('một trăm bốn bốn');
  expect(number2vn(150, config)).toBe('một trăm năm mươi');
});

it('Test from 215, 425, 555, 844, 950 with config', () => {
  const config = {
    short: true,
  };
  expect(number2vn(215, config)).toBe('hai trăm mười lăm');
  expect(number2vn(425, config)).toBe('bốn trăm hai lăm');
  expect(number2vn(555, config)).toBe('năm trăm năm lăm');
  expect(number2vn(844, config)).toBe('tám trăm bốn bốn');
  expect(number2vn(950, config)).toBe('chín trăm năm mươi');
});
