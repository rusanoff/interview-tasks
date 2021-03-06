import { isPrime } from './index';

describe('Test `isPrime()` function', () => {
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
    67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
    139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199
  ];
  const notPrimeNumbers = [
    0, 1, 10, 12, 15, 18, 21, 33, 49, 81, 100, 121, 169, 501, 999, 1000
  ];

  it('Should be primes', () => {
    primeNumbers.forEach((num) => {
      expect(isPrime(num)).toBe(true);
    });
  });

  it('Should not be primes', () => {
    notPrimeNumbers.forEach((num) => {
      expect(isPrime(num)).toBe(false);
    });
  });
});
