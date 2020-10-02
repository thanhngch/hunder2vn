import {
  number2vn,
} from '../src/index';

it('Test from 10000 to 99999', () => {
  expect(number2vn(10000)).toBe('mười nghìn');
  expect(number2vn(10001)).toBe('mười nghìn không trăm lẻ một');
  expect(number2vn(10215)).toBe('mười nghìn hai trăm mười lăm');
  expect(number2vn(98765)).toBe('chín mươi tám nghìn bảy trăm sáu mươi lăm');
});

it('Test from 100000 to 999999', () => {
  expect(number2vn(100000)).toBe('một trăm nghìn');
  expect(number2vn(100001)).toBe('một trăm nghìn không trăm lẻ một');
  expect(number2vn(102003)).toBe('một trăm lẻ hai nghìn không trăm lẻ ba');
  expect(number2vn(100203)).toBe('một trăm nghìn hai trăm lẻ ba');
  expect(number2vn(987654)).toBe('chín trăm tám mươi bảy nghìn sáu trăm năm mươi bốn');
});

it('Test from 1000000 to 9999999', () => {
  expect(number2vn(1000000)).toBe('một triệu');
  expect(number2vn(1000001)).toBe('một triệu không trăm lẻ một');
  expect(number2vn(1002003)).toBe('một triệu hai nghìn không trăm lẻ ba');
  expect(number2vn(9876543)).toBe('chín triệu tám trăm bảy mươi sáu nghìn năm trăm bốn mươi ba');
});

it('Test from 10e6 to 100e9', () => {
  expect(number2vn(10e6)).toBe('mười triệu');
  expect(number2vn(100e6)).toBe('một trăm triệu');
  expect(number2vn(1e9)).toBe('một tỉ');
  expect(number2vn(10e9)).toBe('mười tỉ');
  expect(number2vn(100e9)).toBe('một trăm tỉ');
});

it('Test from 1e12 to 90e15', () => {
  expect(number2vn(1e12)).toBe('một nghìn tỉ');
  expect(number2vn(10e12)).toBe('mười nghìn tỉ');
  expect(number2vn(100e12)).toBe('một trăm nghìn tỉ');
  expect(number2vn(1e15)).toBe('một triệu tỉ');
});
