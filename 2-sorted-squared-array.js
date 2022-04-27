function squareNumber(arr) {
  const squareNumbers = arr.map(number => number * number);
  return squareNumbers.sort((a, b) => a - b);
}