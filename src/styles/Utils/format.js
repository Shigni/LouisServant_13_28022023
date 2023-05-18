export function formatAmount(value) {
  let [integerPart, decimalPart] = value.toString().split('.');

  decimalPart = decimalPart ? decimalPart.padEnd(2, '0') : '00';

  const parts = [];

  while (integerPart.length > 3) {
    parts.push(integerPart.slice(-3));

    integerPart = integerPart.slice(0, -3);
  }

  parts.push(integerPart);
  parts.reverse();

  return `${parts.join(',')}.${decimalPart}`;
}
