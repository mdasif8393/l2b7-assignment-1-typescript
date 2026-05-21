//* problem 1
var filterEvenNumbers = function (numbers) {
    var evenNumbers = numbers.filter(function (number) { return number % 2 == 0; });
    return evenNumbers;
};
var result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
//* Problem 2
var reverseString = function (word) {
    var reverseString = word.split("").reverse().join("");
    return reverseString;
};
var result2 = reverseString("typescript");
var checkType = function (stringNumber) {
    if (typeof stringNumber === "string") {
        return "String";
    }
    else if (typeof stringNumber === "number") {
        return "Number";
    }
    else {
        return "Wrong Input";
    }
};
var result3 = checkType(undefined);
console.log(result3);
