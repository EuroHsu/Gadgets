const assert = require('assert');
const createHash = require('create-hash');

class Random {
  /**
   * Get a random floating point number between `min` to `max`.
   *
   * @method getFloat
   *
   * @param {number} min - min number
   * @param {number} max - max number
   * @return {number} a random floating point number
   */
  static getFloat(min, max) {
    assert(min == +min, 'Please enter at least one number.');
    if (max != +max) {
      max = min;
      min = 0;
    }
    let rangeSize = +max - +min;
    return +min + Math.random() * rangeSize;
  }
  /**
   * Get a random integer between `min` to `max`.
   *
   * @method getInt
   *
   * @param {number} min - min number
   * @param {number} max - max number
   * @return {number} a random integer
   */
  static getInt(min, max) {
    assert(min == +min, 'Please enter at least one number.');
    if (max != +max) {
      max = min;
      min = 0;
    }
    let rangeSize = Math.floor(+max) - Math.ceil(+min) + 1;
    return Math.ceil(+min) + Math.floor(Math.random() * rangeSize);
  }
  /**
   * Get a random boolean value.
   *
   * @method getBool
   *
   * @return {boolean} a random true/false
   */
  static getBool() {
    return Math.random() >= 0.5;
  }

  /**
   * Get a random boolean value.
   *
   * @method getSha256
   *
   * @return {string} a random hex string
   */
  static getSha256() {
    let seed = (Math.random() / Date.now()).toString(36);
    return createHash('sha256').update(seed).digest().toString('hex');
  }
}

module.exports = Random;