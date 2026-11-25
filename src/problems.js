export const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    description: "Given an array of integers and a target, return the indices of two numbers that add up to the target.",
    example: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]",
    explanation: "The numbers 2 and 7 add up to 9. Their indices are 0 and 1.",
    testCases: [
  {
    input: "2 7 11 15\n9",
    expectedOutput: "[0,1]"
  },
  {
    input: "3 2 4\n6",
    expectedOutput: "[1,2]"
  },
  {
    input: "3 3\n6",
    expectedOutput: "[0,1]"
  }
],
    constraints: "Each input has exactly one solution."
  },
  {
    id: 2,
    title: "Reverse String",
    difficulty: "Easy",
    category: "Strings",
    description: "Reverse the given string.",
    example: "Input: hello\nOutput: olleh",
    explanation: "Reverse the order of characters so the last character becomes the first.",
        testCases: [
      { input: "hello", expectedOutput: "olleh" },
      { input: "CodeArena", expectedOutput: "anerAedoC" },
    ],
    constraints: "The string can contain letters and symbols."
  },
  {
    id: 3,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    description: "Determine whether the brackets in a string are properly opened and closed.",
    example: "Input: ()[]{}\nOutput: true",
    explanation: "Every opening bracket must have a matching closing bracket in the correct order.",
        testCases: [
      { input: "()[]{}", expectedOutput: "true" },
      { input: "([)]", expectedOutput: "false" },
    ],
    constraints: "Only (), {}, and [] are used."
  },
  {
    id: 4,
    title: "Binary Search",
    difficulty: "Easy",
    category: "Searching",
    description: "Find the target value in a sorted array and return its index. Return -1 if it is absent.",
    example: "Input: nums = [-1,0,3,5,9], target = 5\nOutput: 3",
    explanation: "Check the middle element and repeatedly eliminate half of the search range.",
        testCases: [
      { input: "-1 0 3 5 9\n5", expectedOutput: "3" },
      { input: "-1 0 3 5 9\n2", expectedOutput: "-1" },
    ],
    constraints: "The array is sorted in ascending order."
  },
  {
    id: 5,
    title: "Merge Sort",
    difficulty: "Medium",
    category: "Sorting",
    description: "Sort an array of integers in ascending order using Merge Sort.",
    example: "Input: [5,2,3,1]\nOutput: [1,2,3,5]",
    explanation: "Divide the array into smaller halves, sort them, and merge the sorted halves.",
        testCases: [
      { input: "5 2 3 1", expectedOutput: "[1,2,3,5]" },
      { input: "4 -1 0 8 3", expectedOutput: "[-1,0,3,8]" },
    ],
    constraints: "Return the array in ascending order."
  },
  {
    id: 6,
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math",
    description: "Determine whether an integer reads the same forwards and backwards.",
    example: "Input: 121\nOutput: true",
    explanation: "121 remains 121 when reversed, so it is a palindrome.",
        testCases: [
      { input: "121", expectedOutput: "true" },
      { input: "-121", expectedOutput: "false" },
    ],
    constraints: "Negative numbers are not palindromes."
  },
  {
    id: 7,
    title: "Maximum Element in Array",
    difficulty: "Easy",
    category: "Arrays",
    description: "Find the largest number in an integer array.",
    example: "Input: [3,8,2,10,5]\nOutput: 10",
    explanation: "Compare each number and keep track of the largest value found.",
        testCases: [
      { input: "3 8 2 10 5", expectedOutput: "10" },
      { input: "-4 -9 0 6", expectedOutput: "6" },
    ],
    constraints: "The array contains at least one number."
  },
  {
    id: 8,
    title: "Minimum Element in Array",
    difficulty: "Easy",
    category: "Arrays",
    description: "Find the smallest number in an integer array.",
    example: "Input: [3,8,2,10,5]\nOutput: 2",
    explanation: "Compare each number and update the minimum whenever a smaller number appears.",
        testCases: [
      { input: "3 8 2 10 5", expectedOutput: "2" },
      { input: "-4 -9 0 6", expectedOutput: "-9" },
    ],
    constraints: "The array contains at least one number."
  },
  {
    id: 9,
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Arrays",
    description: "Return true if any number appears more than once in the array.",
    example: "Input: [1,2,3,1]\nOutput: true",
    explanation: "The number 1 appears twice in the array.",
        testCases: [
      { input: "1 2 3 1", expectedOutput: "true" },
      { input: "1 2 3 4", expectedOutput: "false" },
    ],
    constraints: "The array may contain positive or negative integers."
  },
  {
    id: 10,
    title: "FizzBuzz",
    difficulty: "Easy",
    category: "Programming",
    description: "For numbers from 1 to n, output Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for multiples of both.",
    example: "Input: n = 5\nOutput: [1,2,Fizz,4,Buzz]",
    explanation: "Check divisibility by both 3 and 5 first, then check individual divisibility.",
        testCases: [
      { input: "5", expectedOutput: "[1,2,Fizz,4,Buzz]" },
      { input: "15", expectedOutput: "[1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz]" },
    ],
    constraints: "1 <= n <= 10000"
  },
  {
    id: 11,
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "Strings",
    description: "Determine whether two strings contain the same characters with the same frequencies.",
    example: "Input: s = listen, t = silent\nOutput: true",
    explanation: "Both strings contain exactly the same characters in different orders.",
        testCases: [
      { input: "listen silent", expectedOutput: "true" },
      { input: "rat car", expectedOutput: "false" },
    ],
    constraints: "Strings contain lowercase English letters."
  },
  {
    id: 12,
    title: "Linear Search",
    difficulty: "Easy",
    category: "Searching",
    description: "Find the target value in an array and return its index.",
    example: "Input: nums = [4,7,2,9], target = 2\nOutput: 2",
    explanation: "Check each element from the beginning until the target is found.",
        testCases: [
      { input: "4 7 2 9\n2", expectedOutput: "2" },
      { input: "1 3 5\n8", expectedOutput: "-1" },
    ],
    constraints: "Return -1 if the target does not exist."
  },
  {
    id: 13,
    title: "Bubble Sort",
    difficulty: "Easy",
    category: "Sorting",
    description: "Sort an array in ascending order using Bubble Sort.",
    example: "Input: [5,1,4,2]\nOutput: [1,2,4,5]",
    explanation: "Repeatedly compare adjacent elements and swap them if they are in the wrong order.",
        testCases: [
      { input: "5 1 4 2", expectedOutput: "[1,2,4,5]" },
      { input: "3 -1 0 7", expectedOutput: "[-1,0,3,7]" },
    ],
    constraints: "Sort the array in ascending order."
  },
  {
    id: 14,
    title: "Selection Sort",
    difficulty: "Easy",
    category: "Sorting",
    description: "Sort an array using Selection Sort.",
    example: "Input: [64,25,12,22,11]\nOutput: [11,12,22,25,64]",
    explanation: "Find the smallest element in the unsorted portion and place it at the beginning.",
        testCases: [
      { input: "64 25 12 22 11", expectedOutput: "[11,12,22,25,64]" },
      { input: "4 3 1 2", expectedOutput: "[1,2,3,4]" },
    ],
    constraints: "Sort the array in ascending order."
  },
  {
    id: 15,
    title: "Insertion Sort",
    difficulty: "Easy",
    category: "Sorting",
    description: "Sort an array using the Insertion Sort algorithm.",
    example: "Input: [5,2,4,1]\nOutput: [1,2,4,5]",
    explanation: "Insert each element into its correct position in the already sorted portion.",
        testCases: [
      { input: "5 2 4 1", expectedOutput: "[1,2,4,5]" },
      { input: "1 9 -2 0", expectedOutput: "[-2,0,1,9]" },
    ],
    constraints: "Sort the array in ascending order."
  },
  {
    id: 16,
    title: "Factorial",
    difficulty: "Easy",
    category: "Math",
    description: "Calculate the factorial of a non-negative integer n.",
    example: "Input: n = 5\nOutput: 120",
    explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120.",
        testCases: [
      { input: "5", expectedOutput: "120" },
      { input: "0", expectedOutput: "1" },
    ],
    constraints: "0! = 1"
  },
  {
    id: 17,
    title: "Fibonacci Number",
    difficulty: "Easy",
    category: "Recursion",
    description: "Return the nth Fibonacci number.",
    example: "Input: n = 6\nOutput: 8",
    explanation: "Each Fibonacci number is the sum of the two previous numbers: 0, 1, 1, 2, 3, 5, 8.",
        testCases: [
      { input: "6", expectedOutput: "8" },
      { input: "0", expectedOutput: "0" },
    ],
    constraints: "0 <= n <= 30"
  },
  {
    id: 18,
    title: "Prime Number",
    difficulty: "Easy",
    category: "Math",
    description: "Determine whether a number is prime.",
    example: "Input: n = 7\nOutput: true",
    explanation: "7 is divisible only by 1 and itself.",
        testCases: [
      { input: "7", expectedOutput: "true" },
      { input: "9", expectedOutput: "false" },
    ],
    constraints: "n >= 0"
  },
  {
    id: 19,
    title: "Sum of Digits",
    difficulty: "Easy",
    category: "Math",
    description: "Calculate the sum of the digits of an integer.",
    example: "Input: 1234\nOutput: 10",
    explanation: "1 + 2 + 3 + 4 = 10.",
        testCases: [
      { input: "1234", expectedOutput: "10" },
      { input: "9005", expectedOutput: "14" },
    ],
    constraints: "The input is a non-negative integer."
  },
  {
    id: 20,
    title: "Reverse Integer",
    difficulty: "Easy",
    category: "Math",
    description: "Reverse the digits of an integer.",
    example: "Input: 1234\nOutput: 4321",
    explanation: "Move the last digit to the beginning repeatedly.",
        testCases: [
      { input: "1234", expectedOutput: "4321" },
      { input: "-120", expectedOutput: "-21" },
    ],
    constraints: "Handle negative numbers."
  },
  {
    id: 21,
    title: "Palindrome String",
    difficulty: "Easy",
    category: "Strings",
    description: "Determine whether a string reads the same forwards and backwards.",
    example: "Input: racecar\nOutput: true",
    explanation: "The reversed string is identical to the original string.",
        testCases: [
      { input: "racecar", expectedOutput: "true" },
      { input: "hello", expectedOutput: "false" },
    ],
    constraints: "Compare characters from both ends."
  },
  {
    id: 22,
    title: "Count Vowels",
    difficulty: "Easy",
    category: "Strings",
    description: "Count the number of vowels in a given string.",
    example: "Input: programming\nOutput: 3",
    explanation: "The vowels are o, a, and i.",
        testCases: [
      { input: "programming", expectedOutput: "3" },
      { input: "AEIOUxyz", expectedOutput: "5" },
    ],
    constraints: "Count a, e, i, o, and u."
  },
  {
    id: 23,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: "Strings",
    description: "Find the longest common prefix shared by all strings in an array.",
    example: "Input: [flower,flow,flight]\nOutput: fl",
    explanation: "The prefix fl is shared by every string, but the next character differs.",
        testCases: [
      { input: "flower flow flight", expectedOutput: "fl" },
      { input: "dog racecar car", expectedOutput: "" },
    ],
    constraints: "Return an empty string if no prefix exists."
  },
  {
    id: 24,
    title: "Missing Number",
    difficulty: "Easy",
    category: "Arrays",
    description: "Find the missing number from an array containing numbers from 0 to n.",
    example: "Input: [3,0,1]\nOutput: 2",
    explanation: "The sequence should contain 0, 1, 2, and 3. The number 2 is missing.",
        testCases: [
      { input: "3 0 1", expectedOutput: "2" },
      { input: "0 1", expectedOutput: "2" },
    ],
    constraints: "Exactly one number is missing."
  },
  {
    id: 25,
    title: "Move Zeroes",
        difficulty: "Easy",
    category: "Arrays",
    description: "Move all zeroes to the end while maintaining the relative order of non-zero elements.",
    example: "Input: [0,1,0,3,12]\nOutput: [1,3,12,0,0]",
    explanation: "Move non-zero elements forward, then fill the remaining positions with zeroes.",
        testCases: [
      { input: "0 1 0 3 12", expectedOutput: "[1,3,12,0,0]" },
      { input: "1 0 2 0", expectedOutput: "[1,2,0,0]" },
    ],
    constraints: "Modify the array in place if possible."
  },
  {
  id: 26,
  title: "Rotate Array",
  difficulty: "Easy",
  category: "Arrays",
  description: "Rotate an array to the right by k steps.",
  example: "Input: [1,2,3,4,5], k = 2\nOutput: [4,5,1,2,3]",
  explanation: "Move the last k elements to the beginning of the array.",
      testCases: [
      { input: "1 2 3 4 5\n2", expectedOutput: "[4,5,1,2,3]" },
      { input: "1 2 3\n4", expectedOutput: "[3,1,2]" },
    ],
    constraints: "The array may contain positive, negative, or zero values."
},
{
  id: 27,
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Easy",
  category: "Arrays",
  description: "Find the maximum profit that can be achieved by buying and selling a stock once.",
  example: "Input: [7,1,5,3,6,4]\nOutput: 5",
  explanation: "Buy at price 1 and sell at price 6 to get a profit of 5.",
      testCases: [
      { input: "7 1 5 3 6 4", expectedOutput: "5" },
      { input: "7 6 4 3 1", expectedOutput: "0" },
    ],
    constraints: "You must buy before you sell."
},
{
  id: 28,
  title: "Maximum Subarray",
  difficulty: "Easy",
  category: "Arrays",
  description: "Find the contiguous subarray with the largest sum.",
  example: "Input: [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6",
  explanation: "The subarray [4,-1,2,1] has the maximum sum of 6.",
      testCases: [
      { input: "-2 1 -3 4 -1 2 1 -5 4", expectedOutput: "6" },
      { input: "1", expectedOutput: "1" },
    ],
    constraints: "The array contains at least one integer."
},
{
  id: 29,
  title: "Majority Element",
  difficulty: "Easy",
  category: "Arrays",
  description: "Find the element that appears more than n/2 times in an array.",
  example: "Input: [3,2,3]\nOutput: 3",
  explanation: "The number 3 appears more than half the time.",
      testCases: [
      { input: "3 2 3", expectedOutput: "3" },
      { input: "2 2 1 2", expectedOutput: "2" },
    ],
    constraints: "A majority element always exists."
},
{
  id: 30,
  title: "Merge Sorted Array",
  difficulty: "Easy",
  category: "Arrays",
  description: "Merge two sorted arrays into one sorted array.",
  example: "Input: [1,2,3] and [2,5,6]\nOutput: [1,2,2,3,5,6]",
  explanation: "Combine the elements and maintain sorted order.",
      testCases: [
      { input: "1 2 3\n2 5 6", expectedOutput: "[1,2,2,3,5,6]" },
      { input: "0 4\n1 2 3", expectedOutput: "[0,1,2,3,4]" },
    ],
    constraints: "Both input arrays are sorted in non-decreasing order."
},
{
  id: 31,
  title: "Plus One",
  difficulty: "Easy",
  category: "Arrays",
  description: "Add one to a number represented as an array of digits.",
  example: "Input: [1,2,3]\nOutput: [1,2,4]",
  explanation: "Increase the last digit by one and handle carry if needed.",
      testCases: [
      { input: "1 2 3", expectedOutput: "[1,2,4]" },
      { input: "9 9 9", expectedOutput: "[1,0,0,0]" },
    ],
    constraints: "Digits range from 0 to 9."
},
{
  id: 32,
  title: "Find Single Number",
  difficulty: "Easy",
  category: "Arrays",
  description: "Find the number that appears only once while every other number appears twice.",
  example: "Input: [4,1,2,1,2]\nOutput: 4",
  explanation: "The number 4 occurs only once.",
      testCases: [
      { input: "4 1 2 1 2", expectedOutput: "4" },
      { input: "7 3 7", expectedOutput: "3" },
    ],
    constraints: "Every other element appears exactly twice."
},
{
  id: 33,
  title: "First Unique Character",
  difficulty: "Easy",
  category: "Strings",
  description: "Find the first character in a string that appears only once.",
  example: "Input: 'leetcode'\nOutput: 'l'",
  explanation: "The character 'l' is the first character that occurs once.",
      testCases: [
      { input: "leetcode", expectedOutput: "l" },
      { input: "aabb", expectedOutput: "" },
    ],
    constraints: "Return the character or its index, depending on the implementation."
},
{
  id: 34,
  title: "Remove Duplicates from Sorted Array",
  difficulty: "Easy",
  category: "Arrays",
  description: "Remove duplicate values from a sorted array.",
  example: "Input: [1,1,2,2,3]\nOutput: [1,2,3]",
  explanation: "Keep only one occurrence of each value.",
      testCases: [
      { input: "1 1 2 2 3", expectedOutput: "[1,2,3]" },
      { input: "0 0 1", expectedOutput: "[0,1]" },
    ],
    constraints: "The array is sorted."
},
{
  id: 35,
  title: "Valid Palindrome",
  difficulty: "Easy",
  category: "Strings",
  description: "Check whether a string is a palindrome after ignoring spaces, punctuation, and letter case.",
  example: "Input: 'A man, a plan, a canal: Panama'\nOutput: true",
  explanation: "The cleaned string reads the same forward and backward.",
      testCases: [
      { input: "A man, a plan, a canal: Panama", expectedOutput: "true" },
      { input: "race a car", expectedOutput: "false" },
    ],
    constraints: "Consider only alphanumeric characters."
},
{
  id: 36,
  title: "Remove Characters",
  difficulty: "Easy",
  category: "Strings",
  description: "Remove all occurrences of a specified character from a string.",
  example: "Input: 'banana', remove 'a'\nOutput: 'bnn'",
  explanation: "Remove every occurrence of the selected character.",
      testCases: [
      { input: "banana\na", expectedOutput: "bnn" },
      { input: "hello\nl", expectedOutput: "heo" },
    ],
    constraints: "The input string may contain repeated characters."
},
{
  id: 37,
  title: "String to Integer",
  difficulty: "Easy",
  category: "Strings",
  description: "Convert a string representation of a number into an integer.",
  example: "Input: '42'\nOutput: 42",
  explanation: "Read the numeric characters and convert them into an integer.",
      testCases: [
      { input: "42", expectedOutput: "42" },
      { input: "   -17", expectedOutput: "-17" },
    ],
    constraints: "Handle leading spaces and an optional sign."
},
{
  id: 38,
  title: "Find First Occurrence",
  difficulty: "Easy",
  category: "Strings",
  description: "Find the first position of a target substring in a string.",
  example: "Input: 'hello', target: 'll'\nOutput: 2",
  explanation: "The substring 'll' begins at index 2.",
      testCases: [
      { input: "hello\nll", expectedOutput: "2" },
      { input: "hello\nworld", expectedOutput: "-1" },
    ],
    constraints: "Return -1 if the target is not found."
},
{
  id: 39,
  title: "Greatest Common Divisor",
  difficulty: "Easy",
  category: "Math",
  description: "Find the greatest common divisor of two integers.",
  example: "Input: 12, 18\nOutput: 6",
  explanation: "6 is the largest number that divides both 12 and 18.",
      testCases: [
      { input: "12 18", expectedOutput: "6" },
      { input: "7 13", expectedOutput: "1" },
    ],
    constraints: "Both numbers are non-negative integers."
},
{
  id: 40,
  title: "Least Common Multiple",
  difficulty: "Easy",
  category: "Math",
  description: "Find the least common multiple of two integers.",
  example: "Input: 4, 6\nOutput: 12",
  explanation: "12 is the smallest positive number divisible by both 4 and 6.",
      testCases: [
      { input: "4 6", expectedOutput: "12" },
      { input: "5 7", expectedOutput: "35" },
    ],
    constraints: "Both numbers are positive integers."
},
{
  id: 41,
  title: "Armstrong Number",
  difficulty: "Easy",
  category: "Math",
  description: "Check whether a number is equal to the sum of its digits raised to the power of the number of digits.",
  example: "Input: 153\nOutput: true",
  explanation: "1³ + 5³ + 3³ = 153.",
      testCases: [
      { input: "153", expectedOutput: "true" },
      { input: "123", expectedOutput: "false" },
    ],
    constraints: "The input is a non-negative integer."
},
{
  id: 42,
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "Dynamic Programming",
  description: "Find the number of ways to climb n stairs when you can take either 1 or 2 steps at a time.",
  example: "Input: 3\nOutput: 3",
  explanation: "There are three ways: 1+1+1, 1+2, and 2+1.",
      testCases: [
      { input: "3", expectedOutput: "3" },
      { input: "5", expectedOutput: "8" },
    ],
    constraints: "You can climb either 1 or 2 steps at a time."
},
{
  id: 43,
  title: "Power of Two",
  difficulty: "Easy",
  category: "Math",
  description: "Determine whether a given integer is a power of two.",
  example: "Input: 16\nOutput: true",
  explanation: "16 equals 2⁴.",
      testCases: [
      { input: "16", expectedOutput: "true" },
      { input: "18", expectedOutput: "false" },
    ],
    constraints: "The input is an integer."
},
{
  id: 44,
  title: "Two Sum II",
  difficulty: "Easy",
  category: "Arrays",
  description: "Find two numbers in a sorted array that add up to a target.",
  example: "Input: [2,7,11,15], target = 9\nOutput: [1,2]",
  explanation: "The numbers 2 and 7 add up to 9.",
      testCases: [
      { input: "2 7 11 15\n9", expectedOutput: "[1,2]" },
      { input: "1 2 3 4\n6", expectedOutput: "[2,4]" },
    ],
    constraints: "The array is sorted in ascending order."
},
{
  id: 45,
  title: "Contains Nearby Duplicate",
  difficulty: "Easy",
  category: "Arrays",
  description: "Determine whether the array contains duplicate values within distance k.",
  example: "Input: [1,2,3,1], k = 3\nOutput: true",
  explanation: "The two occurrences of 1 are three indices apart.",
      testCases: [
      { input: "1 2 3 1\n3", expectedOutput: "true" },
      { input: "1 2 3 1\n2", expectedOutput: "false" },
    ],
    constraints: "Check whether duplicate indices differ by at most k."
},
{
  id: 46,
  title: "3Sum",
  difficulty: "Medium",
  category: "Arrays",
  description: "Find all unique triplets in an array whose sum equals zero.",
  example: "Input: [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]",
  explanation: "Find three different elements whose sum is zero without returning duplicate triplets.",
      testCases: [
      { input: "-1 0 1 2 -1 -4", expectedOutput: "[[-1,-1,2],[-1,0,1]]" },
      { input: "0 0 0", expectedOutput: "[[0,0,0]]" },
    ],
    constraints: "The returned triplets must be unique."
},
{
  id: 47,
  title: "Product of Array Except Self",
  difficulty: "Medium",
  category: "Arrays",
  description: "Return an array where each element is the product of all other elements except itself.",
  example: "Input: [1,2,3,4]\nOutput: [24,12,8,6]",
  explanation: "Each output value is calculated without multiplying the element at that position.",
      testCases: [
      { input: "1 2 3 4", expectedOutput: "[24,12,8,6]" },
      { input: "2 3 0 4", expectedOutput: "[0,0,24,0]" },
    ],
    constraints: "Try solving without division."
},
{
  id: 48,
  title: "Container With Most Water",
  difficulty: "Medium",
  category: "Arrays",
  description: "Find two lines that form a container capable of holding the maximum amount of water.",
  example: "Input: [1,8,6,2,5,4,8,3,7]\nOutput: 49",
  explanation: "Choose two lines with the greatest possible area between them.",
      testCases: [
      { input: "1 8 6 2 5 4 8 3 7", expectedOutput: "49" },
      { input: "1 1", expectedOutput: "1" },
    ],
    constraints: "The area is determined by the shorter line and the distance between lines."
},
{
  id: 49,
  title: "Sort Colors",
  difficulty: "Medium",
  category: "Arrays",
  description: "Sort an array containing only 0, 1, and 2.",
  example: "Input: [2,0,2,1,1,0]\nOutput: [0,0,1,1,2,2]",
  explanation: "Arrange all zeroes first, then ones, then twos.",
      testCases: [
      { input: "2 0 2 1 1 0", expectedOutput: "[0,0,1,1,2,2]" },
      { input: "2 1 0", expectedOutput: "[0,1,2]" },
    ],
    constraints: "Try solving in one pass without using a sorting function."
},
{
  id: 50,
  title: "Subarray Sum Equals K",
  difficulty: "Medium",
  category: "Arrays",
  description: "Count the number of subarrays whose sum equals K.",
  example: "Input: 1 1 1\nK: 2\nOutput: 2",
  explanation: "Two subarrays have a sum equal to 2.",
  testCases: [
    { input: "1 1 1 2", expectedOutput: "2" },
    { input: "1 2 3 3", expectedOutput: "2" },
  ],
  constraints: "The array may contain positive and negative integers."
},
{
  id: 51,
  title: "Find Peak Element",
  difficulty: "Medium",
  category: "Arrays",
  description: "Find an element that is greater than its neighboring elements.",
  example: "Input: [1,2,3,1]\nOutput: 2",
  explanation: "The element 3 is greater than both neighboring elements.",
  testCases: [
    { input: "1 2 3 1", expectedOutput: "2" },
    { input: "1 3 2", expectedOutput: "1" },
  ],
  constraints: "A peak element may be located at either end of the array."
},
{
  id: 52,
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Searching",
  description: "Search for a target value in a rotated sorted array.",
  example: "Input: [4,5,6,7,0,1,2], target = 0\nOutput: 4",
  explanation: "Use binary search to identify which half is sorted.",
  testCases: [
    { input: "4 5 6 7 0 1 2\n0", expectedOutput: "4" },
    { input: "4 5 6 7 0 1 2\n3", expectedOutput: "-1" },
  ],
  constraints: "The array contains distinct integers."
},
{
  id: 53,
  title: "Longest Consecutive Sequence",
  difficulty: "Medium",
  category: "Arrays",
  description: "Find the length of the longest sequence of consecutive numbers.",
  example: "Input: [100,4,200,1,3,2]\nOutput: 4",
  explanation: "The sequence 1, 2, 3, 4 has length 4.",
  testCases: [
    { input: "100 4 200 1 3 2", expectedOutput: "4" },
    { input: "0 1 2 5 6 7", expectedOutput: "3" },
  ],
  constraints: "Try solving in O(n) time."
},
{
  id: 54,
  title: "Spiral Matrix",
  difficulty: "Medium",
  category: "Matrices",
  description: "Return all elements of a matrix in spiral order.",
  example: "Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [1,2,3,6,9,8,7,4,5]",
  explanation: "Traverse the matrix from outside toward the center.",
  testCases: [
    { input: "1 2 3\n4 5 6\n7 8 9", expectedOutput: "[1,2,3,6,9,8,7,4,5]" },
    { input: "1 2\n3 4", expectedOutput: "[1,2,4,3]" },
  ],
  constraints: "The matrix may have different numbers of rows and columns."
},
{
  id: 55,
  title: "Rotate Matrix",
  difficulty: "Medium",
  category: "Matrices",
  description: "Rotate an n x n matrix 90 degrees clockwise.",
  example: "Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[7,4,1],[8,5,2],[9,6,3]]",
  explanation: "Transpose the matrix and reverse each row.",
  testCases: [
    { input: "1 2 3\n4 5 6\n7 8 9", expectedOutput: "[[7,4,1],[8,5,2],[9,6,3]]" },
    { input: "1 2\n3 4", expectedOutput: "[[3,1],[4,2]]" },
  ],
  constraints: "Try modifying the matrix in place."
},
{
  id: 56,
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "Strings",
  description: "Find the length of the longest substring containing no repeated characters.",
  example: "Input: 'abcabcbb'\nOutput: 3",
  explanation: "The substring 'abc' contains three unique characters.",
  testCases: [
    { input: "abcabcbb", expectedOutput: "3" },
    { input: "bbbbb", expectedOutput: "1" },
  ],
  constraints: "The string may contain letters, digits, symbols, and spaces."
},
{
  id: 57,
  title: "Group Anagrams",
  difficulty: "Medium",
  category: "Strings",
  description: "Group strings that contain the same characters in different orders.",
  example: "Input: ['eat','tea','tan','ate','nat','bat']\nOutput: [['eat','tea','ate'],['tan','nat'],['bat']]",
  explanation: "Words with the same character frequency belong to the same group.",
  testCases: [
    { input: "eat tea tan ate nat bat", expectedOutput: "[[eat,tea,ate],[tan,nat],[bat]]" },
    { input: "abc bca xyz", expectedOutput: "[[abc,bca],[xyz]]" },
  ],
  constraints: "The input contains lowercase English letters."
},
{
  id: 58,
  title: "Longest Palindromic Substring",
  difficulty: "Medium",
  category: "Strings",
  description: "Find the longest substring that reads the same forward and backward.",
  example: "Input: 'babad'\nOutput: 'bab'",
  explanation: "The substring 'bab' is a palindrome of length 3.",
  testCases: [
    { input: "babad", expectedOutput: "bab" },
    { input: "cbbd", expectedOutput: "bb" },
  ],
  constraints: "If multiple answers exist, any valid longest answer is accepted."
},
{
  id: 59,
  title: "String Compression",
  difficulty: "Medium",
  category: "Strings",
  description: "Compress repeated characters by storing each character followed by its count.",
  example: "Input: ['a','a','b','b','b','c']\nOutput: ['a','2','b','3','c','1']",
  explanation: "Replace consecutive repeated characters with a character and its count.",
  testCases: [
    { input: "a a b b b c", expectedOutput: "a 2 b 3 c 1" },
    { input: "a a a", expectedOutput: "a 3" },
  ],
  constraints: "Compression should be performed in place when possible."
},
{
  id: 60,
  title: "Permutation in String",
  difficulty: "Medium",
  category: "Strings",
  description: "Determine whether one string contains a permutation of another string.",
  example: "Input: s1 = 'ab', s2 = 'eidbaooo'\nOutput: true",
  explanation: "The substring 'ba' is a permutation of 'ab'.",
  testCases: [
    { input: "ab eidbaooo", expectedOutput: "true" },
    { input: "ab eidboaoo", expectedOutput: "false" },
  ],
  constraints: "Both strings contain lowercase English letters."
},
{
  id: 61,
  title: "Decode String",
  difficulty: "Medium",
  category: "Strings",
  description: "Decode a string encoded using repetition counts and brackets.",
  example: "Input: '3[a]2[bc]'\nOutput: 'aaabcbc'",
  explanation: "Repeat the contents of each bracket according to its number.",
  testCases: [
    { input: "3[a]2[bc]", expectedOutput: "aaabcbc" },
    { input: "2[ab]3[c]", expectedOutput: "ababccc" },
  ],
  constraints: "Numbers indicate repetition counts."
},
{
  id: 62,
  title: "Minimum Window Substring",
  difficulty: "Hard",
  category: "Strings",
  description: "Find the smallest substring of a string containing all characters of another string.",
  example: "Input: s = 'ADOBECODEBANC', t = 'ABC'\nOutput: 'BANC'",
  explanation: "The substring 'BANC' contains all required characters and is the shortest.",
  testCases: [
    { input: "ADOBECODEBANC ABC", expectedOutput: "BANC" },
    { input: "a a", expectedOutput: "a" },
  ],
  constraints: "Character frequencies must be respected."
},
{
  id: 63,
  title: "Word Pattern",
  difficulty: "Easy",
  category: "Strings",
  description: "Determine whether a string of words follows a given character pattern.",
  example: "Input: pattern = 'abba', s = 'dog cat cat dog'\nOutput: true",
  explanation: "Each pattern character maps consistently to one word.",
  testCases: [
    { input: "abba\ndog cat cat dog", expectedOutput: "true" },
    { input: "abba\ndog cat cat fish", expectedOutput: "false" },
  ],
  constraints: "The mapping must be one-to-one."
},
{
  id: 64,
  title: "Repeated Substring Pattern",
  difficulty: "Easy",
  category: "Strings",
  description: "Check whether a string can be constructed by repeating a smaller substring.",
  example: "Input: 'abab'\nOutput: true",
  explanation: "The substring 'ab' repeats twice to form 'abab'.",
  testCases: [
    { input: "abab", expectedOutput: "true" },
    { input: "aba", expectedOutput: "false" },
  ],
  constraints: "The string must contain at least one character."
},
{
  id: 65,
  title: "Reverse Linked List",
  difficulty: "Easy",
  category: "Linked Lists",
  description: "Reverse the direction of all links in a singly linked list.",
  example: "Input: 1 -> 2 -> 3 -> 4\nOutput: 4 -> 3 -> 2 -> 1",
  explanation: "Change each node's next pointer to point to the previous node.",
  testCases: [
    { input: "1 2 3 4", expectedOutput: "[4,3,2,1]" },
    { input: "1", expectedOutput: "[1]" },
  ],
  constraints: "Try solving iteratively and recursively."
},
{
  id: 66,
  title: "Middle of Linked List",
  difficulty: "Easy",
  category: "Linked Lists",
  description: "Find the middle node of a linked list.",
  example: "Input: 1 -> 2 -> 3 -> 4 -> 5\nOutput: 3",
  explanation: "Use slow and fast pointers to locate the middle.",
  testCases: [
    { input: "1 2 3 4 5", expectedOutput: "3" },
    { input: "1 2 3 4", expectedOutput: "3" },
  ],
  constraints: "If there are two middle nodes, return the second one."
},
{
  id: 67,
  title: "Remove Nth Node From End",
  difficulty: "Medium",
  category: "Linked Lists",
  description: "Remove the nth node from the end of a linked list.",
  example: "Input: 1 -> 2 -> 3 -> 4 -> 5, n = 2\nOutput: 1 -> 2 -> 3 -> 5",
  explanation: "Use two pointers separated by n positions.",
  testCases: [
    { input: "1 2 3 4 5\n2", expectedOutput: "[1,2,3,5]" },
    { input: "1\n1", expectedOutput: "[]" },
  ],
  constraints: "The list contains at least one node."
},
{
  id: 68,
  title: "Merge Two Sorted Lists",
  difficulty: "Easy",
  category: "Linked Lists",
  description: "Merge two sorted linked lists into one sorted linked list.",
  example: "Input: 1 -> 2 -> 4 and 1 -> 3 -> 4\nOutput: 1 -> 1 -> 2 -> 3 -> 4 -> 4",
  explanation: "Compare the current nodes of both lists and select the smaller one.",
  testCases: [
    { input: "1 2 4\n1 3 4", expectedOutput: "[1,1,2,3,4,4]" },
    { input: "1 3\n2 4", expectedOutput: "[1,2,3,4]" },
  ],
  constraints: "Both lists are sorted."
},
{
  id: 69,
  title: "Linked List Cycle",
  difficulty: "Easy",
  category: "Linked Lists",
  description: "Determine whether a linked list contains a cycle.",
  example: "Input: 1 -> 2 -> 3 -> 2 (cycle)\nOutput: true",
  explanation: "Use slow and fast pointers. If they meet, a cycle exists.",
  testCases: [
    { input: "1 2 3\n1", expectedOutput: "true" },
    { input: "1 2 3\n-1", expectedOutput: "false" },
  ],
  constraints: "Try solving without extra memory."
},
{
  id: 70,
  title: "Add Two Numbers",
  difficulty: "Medium",
  category: "Linked Lists",
  description: "Add two numbers represented by linked lists.",
  example: "Input: [2,4,3] and [5,6,4]\nOutput: [7,0,8]",
  explanation: "Add corresponding digits while carrying values to the next position.",
  testCases: [
    { input: "2 4 3\n5 6 4", expectedOutput: "[7,0,8]" },
    { input: "0\n0", expectedOutput: "[0]" },
  ],
  constraints: "Digits are stored in reverse order."
},
{
  id: 71,
  title: "Palindrome Linked List",
  difficulty: "Easy",
  category: "Linked Lists",
  description: "Determine whether a linked list is a palindrome.",
  example: "Input: [1,2,2,1]\nOutput: true",
  explanation: "The list reads the same forwards and backwards.",
  testCases: [
    { input: "1 2 2 1", expectedOutput: "true" },
    { input: "1 2 3", expectedOutput: "false" },
  ],
  constraints: "Try solving in O(n) time and O(1) space."
},
{
  id: 72,
  title: "Intersection of Two Linked Lists",
  difficulty: "Easy",
  category: "Linked Lists",
  description: "Find the node where two linked lists intersect.",
  example: "Input: Two linked lists intersect at node 8\nOutput: 8",
  explanation: "Use two pointers that switch lists after reaching the end.",
  testCases: [
    { input: "4 1 8 4 5\n5 6 1 8 4 5", expectedOutput: "8" },
    { input: "1 2 3\n4 5 6", expectedOutput: "-1" },
  ],
  constraints: "The intersection is based on node identity."
},
{
  id: 73,
  title: "Min Stack",
  difficulty: "Easy",
  category: "Stacks",
  description: "Design a stack that can retrieve the minimum element in constant time.",
  example: "Operations: push 3, push 2, getMin\nOutput: 2",
  explanation: "Maintain an additional stack containing the minimum values.",
  testCases: [
    { input: "push 3 push 2 push 5 getMin", expectedOutput: "2" },
    { input: "push -1 push 0 getMin", expectedOutput: "-1" },
  ],
  constraints: "getMin must operate in O(1) time."
},
{
  id: 74,
  title: "Daily Temperatures",
  difficulty: "Medium",
  category: "Stacks",
  description: "Find how many days must pass until a warmer temperature.",
  example: "Input: [73,74,75,71,69,72,76,73]\nOutput: [1,1,4,2,1,1,0,0]",
  explanation: "Use a monotonic stack to find the next warmer day.",
  testCases: [
    { input: "73 74 75 71 69 72 76 73", expectedOutput: "[1,1,4,2,1,1,0,0]" },
    { input: "30 40 50 60", expectedOutput: "[1,1,1,0]" },
  ],
  constraints: "Return zero if no warmer day exists."
},
{
  id: 75,
  title: "Next Greater Element",
  difficulty: "Easy",
  category: "Stacks",
  description: "Find the next greater element for each value in an array.",
  example: "Input: [4,1,2]\nOutput: [-1,2,-1]",
  explanation: "The next greater element is the first larger value to the right.",
  testCases: [
    { input: "4 1 2", expectedOutput: "[-1,2,-1]" },
    { input: "2 1 3", expectedOutput: "[3,3,-1]" },
  ],
  constraints: "Return -1 when no greater element exists."
},
{
  id: 76,
  title: "Queue Using Stacks",
  difficulty: "Easy",
  category: "Stacks and Queues",
  description: "Implement a queue using two stacks.",
  example: "Operations: enqueue(1), enqueue(2), dequeue()\nOutput: 1",
  explanation: "Use two stacks to maintain FIFO order.",
  testCases: [
    { input: "enqueue 1 enqueue 2 dequeue", expectedOutput: "1" },
    { input: "enqueue 4 peek empty", expectedOutput: "4 false" },
  ],
  constraints: "Implement enqueue, dequeue, peek, and empty."
},
{
  id: 77,
  title: "Evaluate Reverse Polish Notation",
  difficulty: "Medium",
  category: "Stacks",
  description: "Evaluate an arithmetic expression written in Reverse Polish Notation.",
  example: "Input: ['2','1','+','3','*']\nOutput: 9",
  explanation: "Push numbers onto a stack and perform operations when operators appear.",
  testCases: [
    { input: "2 1 + 3 *", expectedOutput: "9" },
    { input: "4 13 5 / +", expectedOutput: "6" },
  ],
  constraints: "The operators are +, -, *, and /."
},
{
  id: 78,
  title: "Sliding Window Maximum",
  difficulty: "Hard",
  category: "Arrays",
  description: "Find the maximum value in every sliding window of size k.",
  example: "Input: [1,3,-1,-3,5,3,6,7], k = 3\nOutput: [3,3,5,5,6,7]",
  explanation: "Use a deque to efficiently maintain the maximum value.",
  testCases: [
    { input: "1 3 -1 -3 5 3 6 7\n3", expectedOutput: "[3,3,5,5,6,7]" },
    { input: "1 2 3 4\n2", expectedOutput: "[2,3,4]" },
  ],
  constraints: "Try solving in O(n) time."
},
{
  id: 79,
  title: "House Robber",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: "Find the maximum money that can be robbed without robbing adjacent houses.",
  example: "Input: [1,2,3,1]\nOutput: 4",
  explanation: "Rob house 1 and house 3 for a total of 4.",
  testCases: [
    { input: "1 2 3 1", expectedOutput: "4" },
    { input: "2 7 9 3 1", expectedOutput: "12" },
  ],
  constraints: "You cannot rob two adjacent houses."
},
{
  id: 80,
  title: "Coin Change",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: "Find the minimum number of coins required to make a given amount.",
  example: "Input: coins = [1,2,5], amount = 11\nOutput: 3",
  explanation: "11 can be formed using 5 + 5 + 1.",
  testCases: [
    { input: "1 2 5\n11", expectedOutput: "3" },
    { input: "2\n3", expectedOutput: "-1" },
  ],
  constraints: "Return -1 if the amount cannot be formed."
},
{
  id: 81,
  title: "Longest Increasing Subsequence",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: "Find the length of the longest strictly increasing subsequence.",
  example: "Input: [10,9,2,5,3,7,101,18]\nOutput: 4",
  explanation: "One longest increasing subsequence is [2,3,7,101].",
  testCases: [
    { input: "10 9 2 5 3 7 101 18", expectedOutput: "4" },
    { input: "0 1 0 3 2 3", expectedOutput: "4" },
  ],
  constraints: "The subsequence does not need to be contiguous."
},
{
  id: 82,
  title: "Unique Paths",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: "Find the number of unique paths from the top-left corner to the bottom-right corner of a grid.",
  example: "Input: m = 3, n = 7\nOutput: 28",
  explanation: "You can only move right or down.",
  testCases: [
    { input: "3 7", expectedOutput: "28" },
    { input: "3 2", expectedOutput: "3" },
  ],
  constraints: "The grid contains m rows and n columns."
},
{
  id: 83,
  title: "Word Break",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: "Determine whether a string can be segmented into dictionary words.",
  example: "Input: 'leetcode', dictionary = ['leet','code']\nOutput: true",
  explanation: "The string can be split into 'leet' and 'code'.",
  testCases: [
    { input: "leetcode\nleet code", expectedOutput: "true" },
    { input: "catsandog\ncats dog sand and cat", expectedOutput: "false" },
  ],
  constraints: "Dictionary words may be reused."
},
{
  id: 84,
  title: "Merge K Sorted Lists",
  difficulty: "Hard",
  category: "Linked Lists",
  description: "Merge k sorted linked lists into one sorted linked list.",
  example: "Input: [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]",
  explanation: "Use a min-heap to repeatedly select the smallest current node.",
  testCases: [
    { input: "1 4 5\n1 3 4\n2 6", expectedOutput: "[1,1,2,3,4,4,5,6]" },
    { input: "1\n\n", expectedOutput: "[1]" },
  ],
  constraints: "All input lists are sorted."
},
{
  id: 85,
  title: "Median of Two Sorted Arrays",
  difficulty: "Hard",
  category: "Arrays",
  description: "Find the median of two sorted arrays.",
  example: "Input: [1,3] and [2]\nOutput: 2.0",
  explanation: "Combine the middle values conceptually without fully merging the arrays.",
  testCases: [
    { input: "1 3\n2", expectedOutput: "2" },
    { input: "1 2\n3 4", expectedOutput: "2.5" },
  ],
  constraints: "Try solving in O(log(m+n)) time."
},
{
  id: 86,
  title: "Trapping Rain Water",
  difficulty: "Hard",
  category: "Arrays",
  description: "Calculate how much rainwater can be trapped between elevation bars.",
  example: "Input: [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6",
  explanation: "Water trapped at each position depends on the tallest boundaries on both sides.",
  testCases: [
    { input: "0 1 0 2 1 0 1 3 2 1 2 1", expectedOutput: "6" },
    { input: "4 2 0 3 2 5", expectedOutput: "9" },
  ],
  constraints: "The elevation values are non-negative."
},
{
  id: 87,
  title: "N-Queens",
  difficulty: "Hard",
  category: "Backtracking",
  description: "Place n queens on an n x n chessboard so that no two queens attack each other.",
  example: "Input: n = 4\nOutput: 2 solutions",
  explanation: "Use backtracking to explore valid queen placements.",
  testCases: [
    { input: "4", expectedOutput: "2" },
    { input: "1", expectedOutput: "1" },
  ],
  constraints: "Queens cannot share a row, column, or diagonal."
},
{
  id: 88,
  title: "Sudoku Solver",
  difficulty: "Hard",
  category: "Backtracking",
  description: "Solve a Sudoku puzzle by filling empty cells.",
  example: "Input: Partially filled 9x9 Sudoku board\nOutput: Completed valid Sudoku board",
  explanation: "Use backtracking and check row, column, and box constraints.",
  testCases: [
    { input: "puzzle", expectedOutput: "solved" },
  ],
  constraints: "Each row, column, and 3x3 box must contain digits 1–9."
},
{
  id: 89,
  title: "Word Ladder",
  difficulty: "Hard",
  category: "Graphs",
  description: "Find the shortest transformation sequence between two words.",
  example: "Input: beginWord = 'hit', endWord = 'cog'\nOutput: 5",
  explanation: "Transform hit to hot, dot, dog, cog, changing one character at a time.",
  testCases: [
    { input: "hit hot dot dog cog\nhot dot dog lot log cog", expectedOutput: "5" },
    { input: "hit cog\nhot dot dog", expectedOutput: "0" },
  ],
  constraints: "Each intermediate word must exist in the dictionary."
},
{
  id: 90,
  title: "Regular Expression Matching",
  difficulty: "Hard",
  category: "Dynamic Programming",
  description: "Implement pattern matching supporting '.' and '*'.",
  example: "Input: s = 'aa', p = 'a*'\nOutput: true",
  explanation: "The dot matches any character and the star allows repetition.",
  testCases: [
    { input: "aa\na*", expectedOutput: "true" },
    { input: "ab\na*", expectedOutput: "false" },
  ],
  constraints: "The matching must cover the entire string."
},
{
  id: 91,
  title: "Edit Distance",
  difficulty: "Hard",
  category: "Dynamic Programming",
  description: "Find the minimum number of operations required to convert one string into another.",
  example: "Input: 'horse' to 'ros'\nOutput: 3",
  explanation: "Operations include insertion, deletion, and replacement.",
  testCases: [
    { input: "horse ros", expectedOutput: "3" },
    { input: "intention execution", expectedOutput: "5" },
  ],
  constraints: "Each operation has a cost of one."
},
{
  id: 92,
  title: "Largest Rectangle in Histogram",
  difficulty: "Hard",
  category: "Stacks",
  description: "Find the largest rectangular area that can be formed in a histogram.",
  example: "Input: [2,1,5,6,2,3]\nOutput: 10",
  explanation: "The bars with heights 5 and 6 form a rectangle with area 10.",
  testCases: [
    { input: "2 1 5 6 2 3", expectedOutput: "10" },
    { input: "2 4", expectedOutput: "4" },
  ],
  constraints: "Bar widths are equal to one."
},
{
  id: 93,
  title: "Best Time to Buy and Sell Stock III",
  difficulty: "Hard",
  category: "Dynamic Programming",
  description: "Find the maximum profit from at most two stock transactions.",
  example: "Input: [3,3,5,0,0,3,1,4]\nOutput: 6",
  explanation: "Make up to two buy-and-sell transactions to maximize profit.",
  testCases: [
    { input: "3 3 5 0 0 3 1 4", expectedOutput: "6" },
    { input: "1 2 3 4 5", expectedOutput: "4" },
  ],
  constraints: "You must sell before buying again."
},
{
  id: 94,
  title: "Serialize and Deserialize Binary Tree",
  difficulty: "Hard",
  category: "Trees",
  description: "Convert a binary tree into a string and reconstruct the tree from that string.",
  example: "Input: Binary tree [1,2,3,null,null,4,5]\nOutput: Reconstructed identical tree",
  explanation: "Store node values and null markers to preserve tree structure.",
  testCases: [
    { input: "1 2 3 null null 4 5", expectedOutput: "[1,2,3,null,null,4,5]" },
    { input: "", expectedOutput: "[]" },
  ],
  constraints: "Serialization and deserialization must be reversible."
},
{
  id: 95,
  title: "Binary Tree Maximum Path Sum",
  difficulty: "Hard",
  category: "Trees",
  description: "Find the maximum sum of values along any path in a binary tree.",
  example: "Input: [1,2,3]\nOutput: 6",
  explanation: "The path 2 -> 1 -> 3 has a sum of 6.",
  testCases: [
    { input: "1 2 3", expectedOutput: "6" },
    { input: "-10 9 20 null null 15 7", expectedOutput: "42" },
  ],
  constraints: "A path may start and end at any nodes."
},
{
  id: 96,
  title: "Find Minimum in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Searching",
  description: "Find the minimum value in a rotated sorted array.",
  example: "Input: [3,4,5,1,2]\nOutput: 1",
  explanation: "Use binary search to identify the rotation point.",
  testCases: [
    { input: "3 4 5 1 2", expectedOutput: "1" },
    { input: "4 5 6 7 0 1 2", expectedOutput: "0" },
  ],
  constraints: "The array contains distinct integers."
},
{
  id: 97,
  title: "LRU Cache",
  difficulty: "Medium",
  category: "Design",
  description: "Design a Least Recently Used cache with get and put operations.",
  example: "Operations: put(1,1), put(2,2), get(1), put(3,3)\nOutput: Key 2 is evicted",
  explanation: "Remove the least recently accessed item when capacity is reached.",
  testCases: [
    { input: "2\nput 1 1 put 2 2 get 1 put 3 3 get 2", expectedOutput: "[1,-1]" },
    { input: "1\nput 1 10 get 1", expectedOutput: "[10]" },
  ],
  constraints: "Get and put should run in O(1) time."
},
{
  id: 98,
  title: "Critical Connections",
  difficulty: "Hard",
  category: "Graphs",
  description: "Find edges in a network whose removal disconnects the graph.",
  example: "Input: Network graph\nOutput: Critical edges",
  explanation: "Use DFS discovery times and low-link values.",
  testCases: [
    { input: "4 4\n0 1\n1 2\n2 0\n1 3", expectedOutput: "[[1,3]]" },
    { input: "2 1\n0 1", expectedOutput: "[[0,1]]" },
  ],
  constraints: "The graph is connected."
},
{
  id: 99,
  title: "Alien Dictionary",
  difficulty: "Hard",
  category: "Graphs",
  description: "Determine the character ordering of an alien language from a sorted dictionary.",
  example: "Input: ['wrt','wrf','er','ett','rftt']\nOutput: 'wertf'",
  explanation: "Build a graph of character precedence and perform topological sorting.",
  testCases: [
    { input: "wrt wrf er ett rftt", expectedOutput: "wertf" },
    { input: "z x z", expectedOutput: "" },
  ],
  constraints: "The input words are sorted according to the alien language."
},
{
  id: 100,
  title: "Dijkstra Shortest Path",
  difficulty: "Hard",
  category: "Graphs",
  description: "Find the shortest distance from a starting node to every other node in a weighted graph.",
  example: "Input: Weighted graph and source node\nOutput: Shortest distances",
  explanation: "Repeatedly select the node with the smallest tentative distance.",
  testCases: [
    { input: "4 5\n0 1 4\n0 2 1\n2 1 2\n1 3 1\n2 3 5\n0", expectedOutput: "[0,3,1,4]" },
    { input: "3 2\n0 1 2\n1 2 3\n0", expectedOutput: "[0,2,5]" },
  ],
  constraints: "Edge weights must be non-negative."
}
];
