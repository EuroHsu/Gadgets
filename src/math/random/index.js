'use strict';

const assert = require('assert');
const BN = require('bn.js');
const crypto = require('crypto');

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
  return crypto.createHash('sha256').update(seed).digest('hex');
}

const getSecureInt = (minimum, maximum) => {
  if (maximum == null) {
    maximum = minimum;
    minimum = 0;
  }
  if (!/^[0-9]+$/.test(minimum)) {
    throw new Error('The minimum value must be an integer.');
  }
  if (!/^[0-9]+$/.test(maximum)) {
    throw new Error('The maximum value must be an integer.');
  }
  const min = new BN(minimum);
  const max = new BN(maximum);
  if (max.lt(min)) {
    throw new Error('The maximum value must be higher than the minimum value.');
  }
  const zero = new BN(0), one = new BN(1), eight = new BN(8);
  let range = max.sub(min);
	let bitsNeeded = zero;
  let bytesNeeded = zero;
  let mask = one;
	while (range.gt(zero)) {
		if (bitsNeeded.mod(eight).eq(zero)) {
			bytesNeeded = bytesNeeded.add(one);
		}
    bitsNeeded = bitsNeeded.add(one);
    mask = mask.shln(1).or(one);
		range = range.ushrn(1);
  }
  const randomBytes = crypto.randomBytes(+bytesNeeded);
  let randomValue = zero;
  for (let i = 0; i < +bytesNeeded; i++) {
    randomValue = randomValue.or(new BN(randomBytes[i]).shln(8 * i));
  }
  randomValue = randomValue.and(mask);
  if (randomValue.lte(max.sub(min))) {
    return min.add(randomValue).toString();
  } else {
    return getSecureInt(minimum, maximum);
  }
}

module.exports = {
  getFloat,
  getInt,
  getSecureInt,
  getBool,
  getSha256
};