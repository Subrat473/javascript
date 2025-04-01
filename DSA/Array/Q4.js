// Question 5: Filter out books published before the year 2000 and return their titles

const books = [
    { title: 'Book 1', year: 1998 },
    { title: 'Book 2', year: 2003 },
    { title: 'Book 3', year: 1995 },
    { title: 'Book 4', year: 2001 },
];

// Expected Output: ['Book 2', 'Book 4']


// Question 6: Capitalize the first letter of each word in the array

const strings = ['hello world', 'i am openai', 'welcome to javascript'];

// Expected Output: ['Hello World', 'I Am Openai', 'Welcome To Javascript']



// How do you access the first and last elements of an array?

const firstElement = arr[0]; // O(1)
const arrLength = arr.length;
const lastElement = arr[arrLength - 1];
console.log(firstElement, arrLength, lastElement);