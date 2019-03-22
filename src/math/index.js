const assert = require('assert');
const createHash = require('create-hash');
const random = require('./random');

class Math {
  /**
   * Check value is a integer.
   *
   * @method isInteger
   *
   * @param {string} value
   * @return {boolean} a integer true/false
   */
  static isInteger(value) {
    return /^[0-9]+$/.test(value);
  }
  /**
   * Check value is a hex number.
   *
   * @method isHex
   *
   * @param {string} value
   * @return {boolean} a hex number true/false
   */
  static isHex(value) {
    return /^(0x)?[0-9A-Fa-f]+$/.test(value);
  }
  /**
   * Encode your string to hex.
   *
   * @method strToHex
   *
   * @param {string} str - string
   * @return {string} a encode hex string
   */
  static strToHex(str) {
    assert(typeof str == 'string', `${str} is not a string.`);
    return new Buffer(str).toString('hex');
  }
  /**
   * Decode your hex to string.
   *
   * @method hexToStr
   *
   * @param {string} hex - hex string
   * @return {string} a decode string
   */
  static hexToStr(hex) {
    assert(typeof hex == 'string' && this.isHex(hex), `${hex} is not a hex string.`);
    return new Buffer(hex, 'hex').toString();
  }
  /**
   * Returns an object with all random modules.
   *
   * @returns {Object}
   */
  static get random() {
    return random;
  }
}

module.exports = Math;