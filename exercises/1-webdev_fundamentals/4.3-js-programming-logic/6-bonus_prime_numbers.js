/* 

EXERCÍCIO:
 6- Faça um programa que diz se um número definido numa variável é primo ou não. 

*/

const number = -1013;
// Forces the number to positive
const inputNumber = Math.abs(number);
// Defines what would the array of divisors be if the number was a prime number
const expectedPrimeDivisors = [1, inputNumber];
// Stores the number's divisors
let divisorsArray = [];
// Stores remainders of divisions
let remainder;
// Sets whether it is a prime number or not
let isPrime = false;

// Finds the number's divisors
for (let divisor = 0; divisor <= inputNumber; divisor += 1) {
    remainder = inputNumber % divisor;
    if (remainder == 0) {
        divisorsArray.push(divisor);
    }
}

// Divisors array length
const divisorsLength = divisorsArray.length;

// Checks if its length matches that of a prime number
if (divisorsLength == 2) {
    // Compares whether each of the numbers is the same in both arrays 
    // (number's and expected). If so, isPrime will be true.
    for (let index = 0; index < divisorsLength; index += 1) {
        if (divisorsArray[index] == expectedPrimeDivisors[index]) {
            isPrime = true;
        } else {
            isPrime = false;
        }
    }
}

// Output
if (isPrime) {
    console.log(number, 'is a prime number.');
} else {
    console.log(number, 'is not a prime number.');
}
