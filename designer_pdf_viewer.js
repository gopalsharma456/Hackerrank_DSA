function designerPdfViewer(h, word) {
  // Write your code here
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let sortedInputWordArray = [...word].sort();
  let maximumHeight = 0;
  let newArray = [];
  for (let i = 0; i < sortedInputWordArray.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      if (sortedInputWordArray[i] == alphabets[j]) {
        newArray.push(h[j]);
      }
    }
    maximumHeight = h[i];
  }
  let maximumHeightOfWord = Math.max(...newArray);
  return maximumHeightOfWord * word.length;
}
