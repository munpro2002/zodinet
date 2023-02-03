function sumOfRange(firstNum, lastNum) {
  let sum = 0;
  //If lastNum is less than firstNum then swap 2 numbers
  if (lastNum < firstNum) {
    [firstNum, lastNum] = [lastNum, firstNum];
  }

  for (let current = firstNum; current <= lastNum; current++) {
    sum += current;
  }

  return sum;
}

// console.log(sumOfRange(5, 2));

function doubleSumOfRange(firstNum, lastNum, isDouble) {
  let result = sumOfRange(firstNum, lastNum);

  return isDouble ? result * 2 : result;
}

// console.log(doubleSumOfRange(5, 2, false));
