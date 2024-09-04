let swappedValueArray = [];

function swapElements(arr) {
  if (arr.length % 2 == 0) {
    for (var i = 1; i < arr.length; i += 2) {
      swappedValueArray.push(arr[i], arr[i - 1]);
    }
  } else {
    for (var i = 1; i < arr.length - 1; i += 2) {
      swappedValueArray.push(arr[i], arr[i - 1]);
    }
    swappedValueArray.push(arr[arr.length - 1]);
  }
  return swappedValueArray;
}

console.log(swapElements([1, 2, 3, 4, 5]));
