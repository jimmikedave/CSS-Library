import React, {useState, useEffect} from 'react';

const WhiteBoardPrep = () => {
const [answer, setAnswer] = useState('');

// Palindrome Problem 1
// const question = `Given a string , return true if the string is a palindrome and false if it isnt.
//     Include spaces and punctuation in deciding if the string is a palindrome.
//     (Palindrome is a word that is the same backwards as it is forwards)
//     // ex. racecar`;

// const isPalindrome = (word) => {
    
// }

// useEffect(() => {
//     isPalindrome('racecar')
// })



// Fibonacci Problem 2
// const question = `Write a function that returns the nth entry in the Fibonacci sequence, where n is a number 
//     you pass in as an argument to the function. (n = index)
//     [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`;
// Iterative
// const fibonacci = (num) => {
    
    
// }

// Recursive
// const fibonacci = (num) => {
//     if (num < 2) {
//         return num
//     }
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// useEffect(() => {
//     setAnswer(fibonacci(3));
// })

// FizzBuzz Problem 3
// const question = `Write a function that does the following
//     1) Console logs the numbers from 1 to n, where n is the integer the function takes as its
//     parameter.
//     2) Logs fizz instead of the number for multiples of 3.
//     3) Logs buzz instead of the number for multiples of 5.
//     4) Logs fizzbuzz for numbers that are multiples of both 3 and 5.`

// const fizzbuzz = (num) => {

// }


// useEffect(() => {
//     fizzbuzz(15)
// })

// Anagram Problem 4
// const question = `A word is an anagram of another word if both use the same letters in the same quantity, 
//     but arranged differently.
//     Write a function that checks if two provided strings are anagrams of each other; letter
//     casing shouldn't matter. Also, consider only characters, not spaces or punctuation.
//     ['finder', 'friend'] & ['hello', 'bye']`;

// const isAnagram = (wordOne, wordTwo) => {

// }

// useEffect(() => {
//     isAnagram('friend', 'finder');
// });

// Find the Vowels Problem 5
// const question = `Write a function that takes a string as an argument and returns the number of 
//     vowels contained in that string.
//     hello --> 2
//     why --> 0`;

// const countVowels = (string) => {
    
// }


// useEffect(() => {
//     countVowels('dogecoin');
// })


// CREATE A COUNTER ELEMENT
const question = `Please create a counter element with increase and decrease buttons.`

// # Timer Challenge

// Please create a small application that incorporates the features below with any language/framework that you are most comfortable with.

// Don't worry about styling. We can add styles if we have time!

// ## Page 1

// - After 3 seconds Component 1 should be displayed.

// ## Component 1

// - There should be two buttons.
// - Button 1 should hide the component and restart the 3 second timer.

// - Button 2 should start a 5 second timer. When that 5 second timer finishes, Component 2 should appear.

// ## Component 2

// - There should be one button.
// - Button 1 should hide Component 2.

    return (
        <div className="container">
            <div className="container__content">
                <div className="whiteboard__container">
                    <h1>{question}</h1>
                    <h2>Function output: {answer}</h2>
                </div> 
            </div>
        </div>
    )
}
 
// Palindrome Problem 1
// Given a string , return true if the string is a palindome and false if it isnt.
// Include spaces and punctuation in deciding if the string is a palindrome.
// racecar - true | anna - true
// table - flase | john - false

// Solution
// const palindrome = str => {
//     str = str.toLowerCase()
//     return str === str.split('').reverse().join('')
// }


// Fibonacci Problem 2
// Write a function that returns the nth entry in the Fibonacci sequence, where n is a number 
// you pass in as an argument to the function. (n is the index number)
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Solution 1 
// const fibonacci = num => {
//     // store the Fibonacci sequence you're going
//     // to generate inside an array and
//     // initialize the array with the first two
//     // numbers of the sequence
//     const result = [0, 1]
  
//     for(let i = 2; i <= num; i++) {
//       // push the sum of the two numbers
//       // preceding the position of i in the result array
//       // at the end of the result array
//       const prevNum1 = result[i - 1]
//       const prevNum2 = result[i - 2]
//       result.push(prevNum1 + prevNum2)
//     }
//     // return the last value in the result array
//     return result[num]
//   }

// Solution 2 *recursion
// const fibonacci = num => {
//     // if num is either 0 or 1 return num
//     if(num < 2) {
//       return num
//     }
//     // recursion here
//     return fibonacci(num - 1) + fibonacci(num - 2)
//   }

// FizzBuzz Problem 3
// Write a function that does the following
// 1) Console logs the numbers from 1 to n, where n is the integer the function takes as its
// parameter.
// 2) Logs fizz instead of the number for multiples of 3.
// 3) Logs buzz instead of the number for multiples of 5.
// 4) Logs fizzbuzz for numbers that are multiples of both 3 and 5.
// Result: 1, 2, fizz, 4, buzz... 11, fizz, 13, 14, fizzbuzz
// Solution
// const fizzBuzz = num => {
//   for(let i = 1; i <= num; i++) {
//     // check if the number is a multiple of 3 and 5
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz')
//     } // check if the number is a multiple of 3
//       else if(i % 3 === 0) {
//       console.log('fizz')
//     } // check if the number is a multiple of 5
//       else if(i % 5 === 0) {
//       console.log('buzz')
//     } else {
//       console.log(i)
//     }
//   }
// }

// Anagram Problem 4
// A word is an anagram of another word if both use the same letters in the same quantity, 
// but arranged differently.
// Write a function that checks if two provided strings are anagrams of each other; letter
// casing shouldn't matter. Also, consider only characters, not spaces or punctuation.
// ['finder', 'friend'] & ['hello', 'bye']

// Solution
// helper function that builds the
// object to store the data
// const buildCharObject = str => {
//     const charObj = {}
//     for(let char of str.replace(/[^\w]/g).toLowerCase()) {
//       // if the object has already a key value pair
//       // equal to the value being looped over,
//       // increase the value by 1, otherwise add
//       // the letter being looped over as key and 1 as its value
//       charObj[char] = charObj[char] + 1 || 1
//     }
//     return charObj
//   }
  
//   // main function
//   const anagram = (strA, strB) => {
//     // build the object that holds strA data
//     const aCharObject = buildCharObject(strA)
//     // build the object that holds strB data
//     const bCharObject = buildCharObject(strB)
  
//     // compare number of keys in the two objects
//     // (anagrams must have the same number of letters)
//     if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
//       return false
//     }
//     // if both objects have the same number of keys
//     // we can be sure that at least both strings
//     // have the same number of characters
//     // Now we can compare the two objects to see if both
//     // have the same letters in the same amount
//     for(let char in aCharObject) {
//       if(aCharObject[char] !== bCharObject[char]) {
//         return false
//       }
//     }
//     // if both the above checks succeed,
//     // you have an anagram: return true
//     return true
//   }

// Find the Vowels Problem 5
// Write a function that takes a string as an argument and returns the number of 
// vowels contained in that string.
// hello --> 2
// why --> 0

// Solution 1 
// const findVowels = str => {
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for(let char of str.toLowerCase()) {
//       if(vowels.includes(char)) {
//         count++
//       }
//     }
//     return count
//   }

// Solution 2
// const findVowels = str => {
//     const matched = str.match(/[aeiou]/gi)
//     return matched ? matches.length : 0
//   }


export default WhiteBoardPrep;