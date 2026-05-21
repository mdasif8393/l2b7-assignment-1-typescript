//* problem 1

const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNumbers = numbers.filter((number) => number % 2 == 0);

  return evenNumbers;
};

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result1);

//* Problem 2
const reverseString = (word: string): string => {
  const reverseString = word.split("").reverse().join("");

  return reverseString;
};

const result2 = reverseString("typescript");
console.log(result2);
