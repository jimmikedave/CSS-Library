// Answers to solved leetcode questions

/*------------- ARRAY -------------*/

// Remove duplicates from an array 
// Solution:
// var removeDuplicates = function (nums) {
//     for(i = 0; i < nums.length; i ++) {
//         if(nums[i] === nums[i+1]) {
//             nums.splice(i, 1)
//             i--;
//         }
//     }
//     return nums.length;
// };


// Best Time to Buy and Sell Stock
// Solution: 
// var maxProfit = function(prices) {    
//     let profit = 0;
    
//     for(i = 0; i < prices.length; i++) {
//         if(prices[i+1] > prices[i]) {
//             profit += prices[i+1] - prices[i]; 
//         }
//     }
//     return profit
// };

// Rotate Array 
// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Solution: 
// var rotate = function(nums, k) {
//     for(i = 0; i < k; i ++) {
//         let lastItem = nums[nums.length - 1]
//         nums.pop();
//         nums.unshift(lastItem);
//     }    
//     return nums
// };

// Contains Duplicate
// Solution:
// var containsDuplicate = function(nums) {
//     let output = false;
    
//     nums.sort();
    
//     for(i = 0; i < nums.length; i ++) {
//         if(nums[i] === nums [i + 1]) {
//             output = true
//         }
//     }
    
    
//     return output;
// };

// Single Number
// Solution:
// var singleNumber = function(nums) {    
//     nums.sort();
   
//     for(i = 0; i < nums.length; i ++) {
//         if(nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
//             return nums[i];
//         }
//     }
// };

// Intersection of Two Arrays
// Solution:
// var intersect = function(nums1, nums2) {
//     let array = []
    
//     if(nums1 !== undefined && nums2 !== undefined) {
//         if(nums1.length > nums2.length) {
//             for(i = 0; i < nums1.length; i++) {
//                 let match = nums2.indexOf(nums1[i])
//                 if(match > -1) {
//                     array.push(nums2[match])
//                     nums1.splice(i, 1)
//                     nums2.splice(match, 1)
//                     i--;
//                 }
//             }
//         } else {
//              for(i = 0; i < nums2.length; i++) {
//                 let match = nums1.indexOf(nums2[i])
//                 if(match > -1) {
//                     array.push(nums1[match])
//                     nums2.splice(i, 1)
//                     nums1.splice(match, 1)
//                     i--;
//                 }
//             }
//         }
//     }
//     return array;
// };

// intersect();


// Move zeroes
// Solution: 
// var moveZeroes = function(nums) {
//     let array = [];
//     const length = nums.length;
//     const end = length - 1;
    
//     for(i=0; i < length; i++) {
//         if(nums[i] === 0) {
//             array.push(0)
//             nums.splice(i, 1)
//             i--
//         }
//         if(i === end) {
//             array.forEach(zero => {
//                 nums.push(zero)
//             })
//         }
//     }
// };

/*------------- STRINGS -------------*/

// Reverse String
// Solution: 
// var reverseString = function(s) {
//     return s.reverse()
// };

// Reverse Integer
// Solution:
// var reverse = function(x) {
//     if(x < 0) {
//         const string = x.toString();
//         const array = string.split("");
//         array.reverse();
//         const str = array.join("")
//         const final = parseInt(str)
        
//         const param = Math.pow(2, 31)
        
//         if(param < final) {
//             return 0;
//         } else {
//             return final * -1;
//         }
        
//     } else {
//         const string = x.toString();
//         const array = string.split("");
//         array.reverse();
//         const str = array.join("")
//         const final = parseInt(str)
        
//         const param = Math.pow(2, 31)
        
//         if(param < final) {
//             return 0;
//         } else {
//             return final;
//         }
//     }
    
// };

// First Unique Character
// Solution:
// var firstUniqChar = function(s) {
//     for(i=0;i<s.length;i++) {
//         const letter = s[i]
        
//         // if they match there are no duplicates

//         if(s.indexOf(letter) === s.lastIndexOf(letter)) {
//            return i
//            } 
//     }
//     return -1
// };