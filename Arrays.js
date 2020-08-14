// Creating and initializing arrays

let daysOfWeek = new Array(); // {1}
daysOfWeek = new Array(7); // {2}
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday');

let daysOfWeek = [];
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday']

//asdasdasdasdasdadasda

// Accessing elements and iterating an array

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

// first 20 numbers of the Fibonacci sequence
const fibonacci = []; // {1}
fibonacci[1] = 1; // {2}
fibonacci[2] = 1; // {3}

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // //{4}
}

for (let i = 1; i < fibonacci.length; i++) { // {5}
    console.log(`fibonacci[${i}]`, fibonacci[i]); // {6}
}

// instead of {5} and {6} we can simply use
console.log('fibonacci', fibonacci);



// Adding elements

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// add a new element to the numbers array
numbers[numbers.length] = 10;
console.log('Add 10 to the end', numbers);

numbers.push(11);
console.log('Add 11 with push', numbers);

numbers.push(12, 13);
console.log('Add 12 and 13 with push', numbers);