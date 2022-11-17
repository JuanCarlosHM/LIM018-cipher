// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });
    it('should return "GHIJKLMNÑOPQRSTUVWXYZABCDEF" for "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ')).toBe('GHIJKLMNÑOPQRSTUVWXYZABCDEF');
    });


    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    it('should return "ghijklmnñopqrstuvwxyzabcdef" for "abcdefghijklmnñopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode(33, 'abcdefghijklmnñopqrstuvwxyz')).toBe('ghijklmnñopqrstuvwxyzabcdef');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    it('should return " !@" for " !@"', () => {
      expect(cipher.encode(33, ' !@')).toBe(' !@');
    });
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" for "GHIJKLMNÑOPQRSTUVWXYZABCDEF" with offset 33', () => {
      expect(cipher.decode(33, 'GHIJKLMNÑOPQRSTUVWXYZABCDEF')).toBe('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
    });

    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    it('should return "abcdefghijklmnopqrstuvwxyz" for "ghijklmnñopqrstuvwxyzabcdef" with offset 33', () => {
      expect(cipher.decode(33, 'ghijklmnñopqrstuvwxyzabcdef')).toBe('abcdefghijklmnñopqrstuvwxyz');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    it('should return " !@" para " !@"', () => {
       expect(cipher.decode(33, ' !@')).toBe(' !@');
    });
  });

});
