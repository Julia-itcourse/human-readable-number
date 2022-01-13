module.exports = function toReadable(number) {
  let result;
  let resultArray = [];

  let numberMap = {
    units: [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ],
    dozens: [
      "",
      "ten",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ],
    hundred: ["hundred"],
    teens: [
      "",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ],
  };

  const isOneDigit = number / 10 < 1;
  const isTwoDigit = number / 10 > 1 && number / 100 < 1;
  const isThreeDigit = number / 100 > 1;

  // for numbers 0 - 9

  if (isOneDigit) {
    result = numberMap.units[number];
  }

  //for 2 digit numbers

  const numArr = Array.from(String(number), Number);

  if (isTwoDigit) {
    //for numbers 10, 20, 30, 40 etc

    if (numArr[1] === 0) {
      return (result = numberMap.dozens[numArr[0]]);
    }

    //for numbers 11 - 19
    if (numArr[0] === 1) {
      return (result = numberMap.teens[numArr[1]]);
    }

    //for numbers 25, 34, 41 etc
    resultArray[0] = numberMap.dozens[numArr[0]];
    resultArray[1] = numberMap.units[numArr[1]];
    return (result = resultArray.join(" "));
  }

  if (isThreeDigit) {
    if (numArr[1] === 0 && numArr[2] === 0) {
      return (result = `${numberMap.units[numArr[0]]} hundred`);
    }

    if (numArr[2] === 0) {
      resultArray[0] = numberMap.units[numArr[0]];
      resultArray[1] = "hundred";
      resultArray[2] = numberMap.dozens[numArr[1]];

      return (result = resultArray.join(" "));
    }

    if (numArr[1] === 0) {
      resultArray[0] = numberMap.units[numArr[0]];
      resultArray[1] = "hundred";
      resultArray[2] = numberMap.units[numArr[2]];

      return (result = resultArray.join(" "));
    }

    //714
    if (numArr[1] === 1 && numArr[2] !== 0) {
      resultArray[0] = numberMap.units[numArr[0]];
      resultArray[1] = "hundred";
      resultArray[2] = numberMap.teens[numArr[2]];

      return (result = resultArray.join(" "));
    } else {
      resultArray[0] = numberMap.units[numArr[0]];
      resultArray[1] = "hundred";
      resultArray[2] = numberMap.dozens[numArr[1]];
      resultArray[3] = numberMap.units[numArr[2]];

      return (result = resultArray.join(" "));
    }
  }
};
