/* 

EXERCÍCIO:
 6- Faça um programa que diz se um número definido numa variável é primo ou não. 

*/

const number = -1013;
const inputNumber = Math.abs(number); // Forces the number to positive
// Defines what would the array of divisors be if the number was a prime number
const expectedPrimeDivisors = [1, inputNumber];
const divisorsArray = []; // Stores the number's divisors
let isPrime = false; // Sets whether it is a prime number or not

// Finds the number's divisors
for (let divisor = 0; divisor <= inputNumber; divisor += 1) {
    let remainder = inputNumber % divisor; // Stores remainders of divisions
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
