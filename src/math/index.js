const assert = require('assert');
const random = require('./random');

const isInteger = (value) => {
  return /^[0-9]+$/.test(value);
}

const isHex = (value) => {
  return /^(0x)?[0-9A-Fa-f]+$/.test(value);
}

const strToHex = (str) => {
  assert(typeof str == 'string', `${str} is not a string.`);
  return new Buffer(str).toString('hex');
}

const hexToStr = (hex) => {
  assert(typeof hex == 'string' && isHex(hex), `${hex} is not a hex string.`);
  return new Buffer(hex, 'hex').toString();
}

module.exports = {
  isInteger,
  isHex,
  strToHex,
  hexToStr,
  random
};