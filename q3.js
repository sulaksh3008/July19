function printPattern(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
      result += j;
    }
    result += "\n";
  }

  console.log(result);
}

const n = 4;
printPattern(n);
