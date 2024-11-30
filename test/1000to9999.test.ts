import {
  number2vn,
} from '../src/index';

it('Test from 1000 to 1010', () => {
  expect(number2vn(1000)).toBe('một nghìn');
  expect(number2vn(1001)).toBe('một nghìn không trăm lẻ một');
  expect(number2vn(1002)).toBe('một nghìn không trăm lẻ hai');
  expect(number2vn(1005)).toBe('một nghìn không trăm lẻ năm');
  expect(number2vn(1010)).toBe('một nghìn không trăm mười');
});

it('Test from 1011 to 1012', () => {
  expect(number2vn(1011)).toBe('một nghìn không trăm mười một');
  expect(number2vn(1012)).toBe('một nghìn không trăm mười hai');
});

it('Test from 2000 to 2099', () => {
  expect(number2vn(2000)).toBe('hai nghìn');
  expect(number2vn(2001)).toBe('hai nghìn không trăm lẻ một');
  expect(number2vn(2002)).toBe('hai nghìn không trăm lẻ hai');
  expect(number2vn(2003)).toBe('hai nghìn không trăm lẻ ba');
  expect(number2vn(2004)).toBe('hai nghìn không trăm lẻ bốn');
  expect(number2vn(2010)).toBe('hai nghìn không trăm mười');
  expect(number2vn(2019)).toBe('hai nghìn không trăm mười chín');
  expect(number2vn(2020)).toBe('hai nghìn không trăm hai mươi');
  expect(number2vn(2021)).toBe('hai nghìn không trăm hai mươi mốt');
});

it('Test from 2000 to 2099 with config', () => {
  const config = {
    thousand: 'ngàn',
  };
  expect(number2vn(2000, config)).toBe('hai ngàn');
  expect(number2vn(2001, config)).toBe('hai ngàn không trăm lẻ một');
  expect(number2vn(2009, config)).toBe('hai ngàn không trăm lẻ chín');
  expect(number2vn(2020, config)).toBe('hai ngàn không trăm hai mươi');
});

it('Test from 2000 to 2099 with config', () => {
  const config = {
    thousand: 'ngàn',
    hundredZero: false,
  };
  expect(number2vn(2001, config)).toBe('hai ngàn lẻ một');
  expect(number2vn(2009, config)).toBe('hai ngàn lẻ chín');
  expect(number2vn(2020, config)).toBe('hai ngàn hai mươi');
});

it('Test from 3000 to 9999 with config', () => {
  const config = {
    thousand: 'ngàn',
    four: 'tư',
    short: true,
    hundredZero: false,
  };
  expect(number2vn(3124, config)).toBe('ba ngàn một trăm hai tư');
  expect(number2vn(5678, config)).toBe('năm ngàn sáu trăm bảy tám');
  expect(number2vn(9999, config)).toBe('chín ngàn chín trăm chín chín');
});
