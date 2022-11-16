import currency from 'currency.js';

/**
 * Brazilian currency options.
 */
const BRL = {
  symbol: 'R$',
  decimal: ',',
  separator: '.',
  pattern: '! #',
  negativePattern: '- ! #'
};

/**
 * Convert amount value to currency.
 * @returns Brazilian currency (BRL).
 */
export function toCurrency(amount: number): currency {
  return currency(amount, BRL);
}
