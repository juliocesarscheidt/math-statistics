/*
progressao geometrica formula ::
startingNumber + ((numberPosition - 1) * ratio);
*/

/*
exemplo ::
  1 => 3           3 + ((1 - 1) * 2) = 3
  2 => 5           3 + ((2 - 1) * 2) = 5
  3 => 7           3 + ((3 - 1) * 2) = 7
  4 => 9           3 + ((4 - 1) * 2) = 9
...
*/

const generatePgNumbers = (startingNumber, sequencesQuantity, ratio) => {
  if ([startingNumber, sequencesQuantity, ratio].some((val) => isNaN(val))) {
      throw new Error('Parameters must be numeric');
  }
  if ([startingNumber, sequencesQuantity, ratio].some((val) => val === Infinity)) {
      throw new Error('Parameters must not be Infinity');
  }

  const numbers = [];

  for (let numberPos = 1; numberPos <= sequencesQuantity; numberPos ++) {
    const number = startingNumber + ((numberPos - 1) * ratio);
    numbers.push(number);
  }

  return numbers;
}

console.log(generatePgNumbers(1, 5, 2));
// [ 1, 3, 5, 7, 9 ]

console.log(generatePgNumbers(1, 5, 4));
// [ 1, 5, 9, 13, 17 ]

console.log(generatePgNumbers(0, 5, 10));
// [ 0, 10, 20, 30, 40 ]

console.log(generatePgNumbers(-10, 5, 10));
// [ -10, 0, 10, 20, 30 ]

console.log(generatePgNumbers(100, 10, 25));
// [ 100, 125, 150, 175, 200, 225, 250, 275, 300, 325 ]                    

// console.log(generatePgNumbers(100, Infinity, 25));
// Parameters must not be Infinity
