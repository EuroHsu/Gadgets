const random = require('../src/math/random');

describe('Random', () => {
  describe('#getFloat', () => {
    it('Should return correct float value between 0 and 2', () => {
      let float = random.getFloat(2);
      expect(float).toBeGreaterThanOrEqual(0);
      expect(float).toBeLessThanOrEqual(2);
    });
    it('Should return correct float value between 3 and 4', () => {
      let float = random.getFloat(3, 4);
      expect(float).toBeGreaterThanOrEqual(3);
      expect(float).toBeLessThanOrEqual(4);
    });
  });
  describe('#getInt', () => {
    it('Should return correct value between 0 and 2', () => {
      let int = random.getInt(2);
      expect(int).toBeGreaterThanOrEqual(0);
      expect(int).toBeLessThanOrEqual(2);
    });
    it('Should return correct integer value between 3 and 4', () => {
      let int = random.getInt(3, 4);
      expect(int).toBeGreaterThanOrEqual(3);
      expect(int).toBeLessThanOrEqual(4);
    });
  });
  describe('#getSecureInt', () => {
    it('Should return correct value between 0 and 2', () => {
      let int = parseInt(random.getSecureInt(2));
      expect(int).toBeGreaterThanOrEqual(0);
      expect(int).toBeLessThanOrEqual(2);
    });
    it('Should return correct integer value between 3 and 4', () => {
      let int = parseInt(random.getSecureInt(3, 4));
      expect(int).toBeGreaterThanOrEqual(3);
      expect(int).toBeLessThanOrEqual(4);
    });
  });
  describe('#getBool', () => {
    it('Should return true/false', () => {
      expect(typeof random.getBool()).toBe('boolean');
    });
  });
  describe('#getSha256', () => {
    it('Should return a hex string', () => {
      expect(/^[0-9A-Fa-f]+$/.test(random.getSha256())).toBeTruthy();
    });
    it('Should return correct length', () => {
      expect(random.getSha256()).toHaveLength(64);
    });
  });
});