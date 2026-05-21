//* problem 1
var filterEvenNumbers = function (numbers) {
    var evenNumbers = numbers.filter(function (number) { return number % 2 == 0; });
    return evenNumbers;
};
var result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result1);
