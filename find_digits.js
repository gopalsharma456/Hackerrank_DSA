function findDigits(n) {
  let number = n;
  let integerCount = 0;
  let digit = [];

  while (n > 0) {
    digit.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  for (let i = 0; i < digit.length; i++) {
    if (number % digit[i] == 0) {
      integerCount++;
    }
  }
  return integerCount;
}
