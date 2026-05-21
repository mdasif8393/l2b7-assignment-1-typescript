//* problem 1

const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNumbers = numbers.filter((number) => number % 2 == 0);

  return evenNumbers;
};

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result1);

//* Problem 2
