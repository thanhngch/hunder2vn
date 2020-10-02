/* eslint-disable no-undef */
import {
  number2vn,
} from '../src/index';

it('Test from 1e12 to 90e15', () => {
  const oneE3 = BigInt(1e3);
  const oneE15 = BigInt(1e15);
  const oneE18 = oneE15 * oneE3;
  const oneE21 = oneE18 * oneE3;
  const oneE24 = oneE21 * oneE3;
  const oneE27 = oneE24 * oneE3;
  const oneE30 = oneE27 * oneE3;
  const oneE33 = oneE30 * oneE3;
  const oneE36 = oneE33 * oneE3;
  const oneE39 = oneE36 * oneE3;
  expect(number2vn(oneE15)).toBe('một triệu tỉ');
  expect(number2vn(oneE18)).toBe('một tỉ tỉ');
  expect(number2vn(oneE21)).toBe('một nghìn tỉ tỉ');
  expect(number2vn(oneE24)).toBe('một triệu tỉ tỉ');
  expect(number2vn(oneE27)).toBe('một tỉ tỉ tỉ');
  expect(number2vn(oneE30)).toBe('một nghìn tỉ tỉ tỉ');
  expect(number2vn(oneE33)).toBe('một triệu tỉ tỉ tỉ');
  expect(number2vn(oneE36)).toBe('một tỉ tỉ tỉ tỉ');
  expect(number2vn(oneE39)).toBe('một nghìn tỉ tỉ tỉ tỉ');
});
