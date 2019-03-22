const assert = require('assert');
const createHash = require('create-hash');

const getFloat = (min, max) => {
  assert(min == +min, 'Please enter at least one number.');
  if (max != +max) {
    max = min;
    min = 0;
  }
  let rangeSize = +max - +min;
  return +min + Math.random() * rangeSize;
}

const getInt = (min, max) => {
  assert(min == +min, 'Please enter at least one number.');
  if (max != +max) {
    max = min;
    min = 0;
  }
  let rangeSize = Math.floor(+max) - Math.ceil(+min) + 1;
  return Math.ceil(+min) + Math.floor(Math.random() * rangeSize);
}

const getBool = () => {
  return Math.random() >= 0.5;
}

const getSha256 = () => {
  let seed = (Math.random() / Date.now()).toString(36);
  return createHash('sha256').update(seed).digest().toString('hex');
}

module.exports = {
  getFloat,
  getInt,
  getBool,
  getSha256
};