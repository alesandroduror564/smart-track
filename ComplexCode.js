/*
Filename: ComplexCode.js
Content: A complex and sophisticated JavaScript code with advanced functionalities
*/

// Class for creating a complex number object
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(complex) {
    let real = this.real + complex.real;
    let imaginary = this.imaginary + complex.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  subtract(complex) {
    let real = this.real - complex.real;
    let imaginary = this.imaginary - complex.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  multiply(complex) {
    let real = this.real * complex.real - this.imaginary * complex.imaginary;
    let imaginary = this.real * complex.imaginary + this.imaginary * complex.real;
    return new ComplexNumber(real, imaginary);
  }

  divide(complex) {
    let denominator = complex.real * complex.real + complex.imaginary * complex.imaginary;
    let real = (this.real * complex.real + this.imaginary * complex.imaginary) / denominator;
    let imaginary = (this.imaginary * complex.real - this.real * complex.imaginary) / denominator;
    return new ComplexNumber(real, imaginary);
  }

  getMagnitude() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }

  getAngle() {
    return Math.atan2(this.imaginary, this.real) * (180 / Math.PI);
  }
}

// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
  let sum = numbers.reduce((total, number) => total + number, 0);
  return sum / numbers.length;
}

// Function to find the maximum element in an array
function findMaxElement(array) {
  let max = Number.NEGATIVE_INFINITY;
  for (let element of array) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

// Function to reverse a string
function reverseString(string) {
  return string.split('').reverse().join('');
}

// Function to determine if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to perform binary search on a sorted array
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// Usage of the above functions and the ComplexNumber class

let numbers = [5, 2, 9, 1, 7, 3, 8, 6, 4];
let average = calculateAverage(numbers);
console.log('Average:', average);

let array = [12, 45, 78, 23, 67, 34, 90, 56];
let maxElement = findMaxElement(array);
console.log('Max Element:', maxElement);

let string = 'Hello, World!';
let reversedString = reverseString(string);
console.log('Reversed String:', reversedString);

let num = 29;
console.log(num, 'is prime?', isPrime(num));

let sortedArray = [1, 4, 7, 10, 13, 19, 22, 25, 29];
let target = 13;
let index = binarySearch(sortedArray, target);
console.log('Index of', target, 'in sortedArray:', index);

let complex1 = new ComplexNumber(3, 4);
let complex2 = new ComplexNumber(2, -1);
let sum = complex1.add(complex2);
console.log('Sum of complex numbers:', sum.real, '+', sum.imaginary, 'i');

let difference = complex1.subtract(complex2);
console.log('Difference of complex numbers:', difference.real, '+', difference.imaginary, 'i');

let product = complex1.multiply(complex2);
console.log('Product of complex numbers:', product.real, '+', product.imaginary, 'i');

let quotient = complex1.divide(complex2);
console.log('Quotient of complex numbers:', quotient.real, '+', quotient.imaginary, 'i');

console.log('Magnitude of complex1:', complex1.getMagnitude());
console.log('Angle of complex1:', complex1.getAngle());