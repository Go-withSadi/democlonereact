function getEvenNumbers(numbers) {
  let evenNumbers = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) evenNumbers.push(numbers[i]);
  }
  return evenNumbers;
}
getEvenNumbers([2, 5, 8, 10, 15]); // =>[2,8,10]
