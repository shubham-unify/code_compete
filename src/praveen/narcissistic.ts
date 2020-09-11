/**
 * Function to find that the given number is Narcissistic Number or not
 * @date 2020-09-09
 * @param {number} num number to check if it is Narcissistic Number
 * @return {boolean} true or false
 */
function checkIfNarcissisticNumber(num: number): boolean {
  let isNarcissisticNumber = false;
  if (num <= 0) {
    return isNarcissisticNumber;
  }
  const numberStr = num.toString();
  const numberLength = numberStr.length;
  let sum = 0;
  for (let i = 0; i < numberLength; i++) {
    const digit = parseInt(numberStr.substr(i, 1));
    sum += Math.pow(digit, numberLength);
  }
  if (sum === num) {
    isNarcissisticNumber = true;
  }
  return isNarcissisticNumber;
}

/**
 * Function to find all the Narcissistic Numbers in the given range
 * @date 2020-09-09
 * @param {number} startNum starting number in the range
 * @param {number} endNum ending number in the range
 * @return {number[]} A array of Narcissistic Numbers
 */
function getNarcissisticNumbersWithinRange(
  startNum: number,
  endNum: number
): Array<number> {
  const narcissisticNumbers: Array<number> = [];
  if (startNum < 0 || endNum < 0 || endNum < startNum) {
    return narcissisticNumbers;
  }
  for (let i: number = startNum; i <= endNum; i++) {
    const isNarcissisticNumber: boolean = checkIfNarcissisticNumber(i);
    if (isNarcissisticNumber) {
      narcissisticNumbers.push(i);
    }
  }
  return narcissisticNumbers;
}

export { checkIfNarcissisticNumber, getNarcissisticNumbersWithinRange };
