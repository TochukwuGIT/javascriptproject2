// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.
// Count Characters: Create a function that counts the number of characters in a string.
// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

// Reverse a String
function reverseString(str) {

    var reversedString = "";
    for (var index = str.length - 1; index >= 0; index--) {
    reversedString += str[index];
    }
    
    return reversedString;
    };
    console.log(reverseString("Abiodun"));
    
    // Count Characters
    function countCharacters(str = "Hello, World!") {
    return str.length;
    };
    console.log(countCharacters("Hello, World!"));
    
    // Capitalize Words
    function capitalizeWords(sentence = "hello world") {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
    console.log(capitalizeWords("hello world"));
    
    // Array Functions:
    
    // Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
    // Sum of Array: Create a function that calculates the sum of all elements in an array.
    // Filter Array: Implement a function that filters out elements from an array based on a given condition.
    
    // Find Maximum and Minimum
    function findMax(arr) {
    return Math.max(...arr);
    }
    console.log(findMax([1, 2, 3, 4, 5]));
    
    function findMin(arr) {
    return Math.min(...arr);
    }
    console.log(findMin([1, 2, 3, 4, 5]));
    
    // Sum of Array
    function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
    }
    console.log(sumArray([1, 2, 3, 4, 5]));
    
    // Filter Array
    function filterArray(arr, condition) {
    return arr.filter(condition);
    }
    console.log(filterArray([1, 2, 3, 4, 5], (x) => x > 3));
    
    
    // Mathematical Functions:
    
    // Factorial: Write a function to calculate the factorial of a given number.
    // Prime Number Check: Create a function to check if a number is prime or not.
    // Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
    
    // Factorial
    function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
    }
    console.log(factorial(5));
    
    // Prime Number Check
    function isPrime(n) {
    if (n <= 1) {
    return false;
    }
    for (var index = 2; index < n;)}