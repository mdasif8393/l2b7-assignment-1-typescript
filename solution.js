//* problem 1
var filterEvenNumbers = function (numbers) {
    var evenNumbers = numbers.filter(function (number) { return number % 2 == 0; });
    return evenNumbers;
};
var result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result1);
//* Problem 2
var reverseString = function (word) {
    var reverseString = word.split("").reverse().join("");
    return reverseString;
};
var result2 = reverseString("typescript");
console.log(result2);
