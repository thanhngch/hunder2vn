const FOUR_1 = 'bốn';
const FOUR_2 = 'tư';
const ZERO_1 = 'lẻ';
const ZERO_2 = 'linh';
const THOUSAND_1 = 'nghìn';
const THOUSAND_2 = 'ngàn';

export const hunder2vn = (number, configs) => {
  const digits = ['không', 'một', 'hai', 'ba', 'bốn', 'năm',
    'sáu', 'bảy', 'tám', 'chín', 'mười',
  ];
  const digit1s = ['mươi', 'một', 'hai', 'ba', 'bốn', 'lăm',
    'sáu', 'bảy', 'tám', 'chín',
  ];
  const digit2s = ['', 'mốt', 'hai', 'ba', 'bốn', 'lăm',
    'sáu', 'bảy', 'tám', 'chín',
  ];
  if (number <= 10) {
    return digits[number];
  }
  if (number <= 19) {
    return `mười ${digit1s[number % 10]}`;
  }
  if (number < 100) {
    const firstNumber = Number.parseInt(number / 10, 10);
    let secondNumber = digit2s[number % 10];
    if (configs.four === FOUR_2 && number % 10 === 4) {
      secondNumber = 'tư';
    }
    if (secondNumber) {
      secondNumber = ` ${secondNumber}`;
    }
    if (configs.short === true && number % 10 !== 0) {
      return `${digits[firstNumber]}${secondNumber}`;
    }
    return `${digits[firstNumber]} mươi${secondNumber}`;
  }
  if (number < 1000) {
    const firstNumber = Number.parseInt(number / 100, 10);
    const hunderNumber = number % 100;
    let secondString;
    if (hunderNumber === 0) {
      secondString = '';
    } else if (hunderNumber < 10) {
      const zeroString = configs.zero === ZERO_2 ? 'linh' : 'lẻ';
      secondString = ` ${zeroString} ${hunder2vn(hunderNumber)}`;
    } else {
      secondString = ` ${hunder2vn(hunderNumber, configs)}`;
    }
    return `${digits[firstNumber]} trăm${secondString}`;
  }
  return '';
};

export const number2vn = (numberParam, configsParams) => {
  if (typeof (numberParam) !== 'number') {
    throw new Error('Parameter is number');
  }
  if (!Number.isInteger(numberParam)) {
    throw new Error('Number is integer');
  }
  const configs = {
    short: false,
    four: FOUR_1,
    zero: ZERO_1,
    thousand: THOUSAND_1,
    ...configsParams,
  };
  const arrayNumber = [];

  let number = numberParam;
  const resultStrings = [];
  if (number === 0) {
    return 'không';
  }
  let negativeNumber = false;
  if (number < 0) {
    number = -number;
    negativeNumber = true;
  }
  while (number) {
    arrayNumber.push(number % 1000);
    number = Number.parseInt(number / 1000, 10);
  }
  const tenPower3s = ['', 'nghìn', 'triệu', 'tỉ'];
  if (configs.thousand === THOUSAND_2) {
    tenPower3s[1] = 'ngàn';
  }
  arrayNumber.forEach((aNumber, index) => {
    const tenPower3sString = index ? ` ${tenPower3s[index]}` : '';
    const numberString = aNumber !== 0 ? hunder2vn(aNumber, configs) : '';
    let numberStringAndTen3s = `${numberString}${tenPower3sString}`;
    if (arrayNumber.length > 1 && index === 0 && aNumber < 11 && aNumber > 0) {
      numberStringAndTen3s = `lẻ ${numberString}`;
    }
    if (numberStringAndTen3s) {
      resultStrings.unshift(numberStringAndTen3s);
    }
  });
  if (negativeNumber) {
    resultStrings.unshift('âm');
  }
  return resultStrings.join(' ');
};
