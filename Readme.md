## Chuyển đổi số thành chữ Việt Nam
[![npm version](http://img.shields.io/npm/v/number2vn.svg?style=flat-square)](https://npmjs.org/package/number2vn)
[![Build Status](https://travis-ci.org/thanhngch/number2vn.svg?branch=main)](https://travis-ci.org/thanhngch/number2vn)
[![Codecov](https://img.shields.io/codecov/c/github/thanhngch/number2vn.svg?style=flat-square)](https://codecov.io/gh/thanhngch/number2vn)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![GitHub license](https://img.shields.io/github/license/thanhngch/number2vn.svg)](https://github.com/thanhngch/number2vn/blob/master/LICENCE)
- Không sử dụng thư viện ngoài
- Test 100% coverage
- Chỉ 126 loc
- Nhiều config tùy chọn

```js
number2vn(123456); // hoặc number2vn('123456');
// -> một trăm hai mươi ba nghìn bốn trăm năm mươi sáu
```

## Config

- Bỏ `mươi` trong hàng chục.

```js
const configs = {
  short: true,
};
number2vn(23); // -> hai mươi ba
number2vn(23, config); // -> hai ba
```

- Số `4` cuối được chuyển tù `bốn` thành `tư`
```js
const configs = {
  short: true,
  four: 'tư',
};
number2vn(14, config); // -> mười bốn
number2vn(24, config); // -> hai tư
number2vn(34, config); // -> ba tư
```

- Số `0` ở hàng chục chuyển từ `lẻ` thành `linh`
```js
const configs = {
  zero: 'linh',
};
number2vn(101); // -> một trăm lẻ một
number2vn(101, config); // -> một trăm linh một
```

- Chuyển từ `nghìn` thành `ngàn`
```js
const config = {
  thousand: 'ngàn',
};
number2vn(2000, config) // -> hai ngàn
number2vn(2001, config) // -> hai ngàn không trăm lẻ một
```

- Số `0` ở hàng trăm có thể bỏ `không trăm`
```js
const config = {
  short: true,
  thousand: 'ngàn',
  hundredZero: false,
};
number2vn(2001, config) // -> hai ngàn lẻ một
number2vn(2009, config) // -> hai ngàn lẻ chín
number2vn(2020, config) // -> hai ngàn hai mươi
number2vn(2021, config) // -> hai ngàn hai mốt
```