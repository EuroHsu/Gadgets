const math = require('../../src/math');

describe('Math', () => {
  describe('#isInteger', () => {
    it('Should return true if input integer', () => {
      expect(math.isInteger(123)).toBeTruthy();
    });
    it('Should return false if input non-integer', () => {
      expect(math.isInteger('abc')).toBeFalsy();
    });
  });
  describe('#isHex', () => {
    it('Should return true if input hex number', () => {
      expect(math.isHex('0xe1a4')).toBeTruthy();
    });
    it('Should return false if input non hex number', () => {
      expect(math.isHex('Hi math.')).toBeFalsy();
    });
  });
  describe('#strToHex', () => {
    it('Should return correct value', () => {
      expect(math.strToHex('Hi math.')).toBe('4869206d6174682e');
    });
    it('Should throw error', () => {
      expect(() => math.strToHex(123)).toThrow('123 is not a string.');
    });
  });
  describe('#hexToStr', () => {
    it('Should return correct value', () => {
      expect(math.hexToStr('4869206d6174682e')).toBe('Hi math.');
    });
    it('Should throw error', () => {
      expect(() => math.hexToStr(123)).toThrow('123 is not a hex string.');
    });
  });
});