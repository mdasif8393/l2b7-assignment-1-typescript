//* problem 1

const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNumbers = numbers.filter((number) => number % 2 == 0);

  return evenNumbers;
};

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//* Problem 2
const reverseString = (word: string): string => {
  const reverseString = word.split("").reverse().join("");

  return reverseString;
};

const result2 = reverseString("typescript");

//* Problem 3
type StringOrNumber = number | string;

const checkType = (stringNumber: StringOrNumber): string => {
  if (typeof stringNumber === "string") {
    return "String";
  } else if (typeof stringNumber === "number") {
    return "Number";
  } else {
    return "Wrong Input";
  }
};

const result3 = checkType(23);

//* Problem 4
const getProperty = <X, Y extends keyof X>(object: X, key: Y): X[Y] => {
  const result = object[key];
  return result;
};

const user = { id: 1, name: "John Doe", age: 21 };
const result4 = getProperty(user, "age");

console.log(result4);
