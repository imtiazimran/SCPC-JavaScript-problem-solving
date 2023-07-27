// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const reversString = str => {
    const input = str.split('')
    const reversedString = []
    for (let i = input.length - 1; i >= 0; i--) {
        reversedString.push(input[i])
    }
    return reversedString.join('')
}
// console.log(reversString("imran"))



// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const arr = [3, -4, 5, 2, 6, 5, -4, -5, 10]

const sumPositiveNumbers = arr => {
    const total = arr.reduce((pre, current) => {
        if (current > 0) {
            return pre + current;
        }
        return pre
    }, 0)
    return total
}

// console.log(sumPositiveNumbers(arr))


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
const findFrequentElement = arr => {
    const count = {}
    arr.map(element => {
        count[element] = (count[element] || 0) + 1;
    })
    let frequentNumber;
    let maxCount = 0
    for (let i in count) {
        if (count[i] > maxCount) {
            maxCount = count[i]
            frequentNumber = i
        }
    }
    return frequentNumber
}

// console.log(findFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]))


// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

const indices = findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 19);
// console.log(indices); 


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const simpleCalculator = (a, op, b) => {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "/":
            if (b === 0) {
                throw new Error("devision by 0 is not allowed")
            }
            return a / b;
        case "*":
            return a * b;
        case "%":
            return a % b;
        default:
            throw new Error("look like the oparetor is invalide. +, -, *, /, and % are supported")
    }
}

// console.log(simpleCalculator(20, "+" , 20))




// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const randomPassword = limit => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    const allCarecters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters

    let password = '';
    for(let i = 0; i < limit; i++){
        const randomIndex = Math.floor(Math.random() * allCarecters.length)
        password += allCarecters[randomIndex]
    }
    return password
}

// console.log(randomPassword(8))



// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInt(romanNumeral) {
    const romanNumeralsMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentSymbol = romanNumeral[i];
      const nextSymbol = romanNumeral[i + 1];
  
      const currentValue = romanNumeralsMap[currentSymbol];
      const nextValue = romanNumeralsMap[nextSymbol];
  
      if (nextValue > currentValue) {
        result += nextValue - currentValue;
        i++; 
      } else {
        result += currentValue;
      }
    }
  
    return result;
  }
  
//   console.log(romanToInt("VIII"));
  


  