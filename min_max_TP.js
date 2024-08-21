function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else {
      max = arr[i];
    }
  }
  return `[${arr}]\nmin: ${min}\nmax: ${max}\n`;
}
console.log(minMax([1, 2, 5, 4, 6, 7, 3, 9, 10]));
console.log(minMax([6, 7, 3, -1]));
