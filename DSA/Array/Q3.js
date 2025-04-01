// Question 3: Calculate the factorial of the largest number in the array

const numbers = [5, 2, 8, 4, 3];

const largestFactorial = numbers.reduce((largest, num) => {
    const currentFactorial = Array
    .from({ length: num })
    .map((_, i) => i + 1)
    .reduce((fact, val) => fact * val, 1);

    return currentFactorial > largest ? currentFactorial : largest;
}, 1);

console.log(largestFactorial); // Output: 40320 (8!)



// Calculate the average score of students who scored above 90


const students = [
    { name: 'John', score: 85 },
    { name: 'Sarah', score: 92 },
    { name: 'Michael', score: 88 },
    { name: 'Emma', score: 95 },
    { name: 'Daniel', score: 90 },
];

const above90StudentsAverage = students
    .filter((student) => student.score > 90)
    .reduce((acc, student, i, arr) => acc + student.score / arr.length, 0);

console.log(above90StudentsAverage); // Output: 93.5 (average of 95 and 92)