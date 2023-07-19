function createNumberWithEvenDigits(n) {
  const strN = n.toString();
  let result = "";

  for (let i = 0; i < strN.length; i++) {
    const digit = parseInt(strN[i]);

    if (digit % 2 === 0) {
      result += digit;
    }
  }

  return parseInt(result);
}

const n = 987654;
const result = createNumberWithEvenDigits(n);
console.log(result); // Output: 864
