// 1) forEach() method  

let numbers = [1, 2, 3];

let result = numbers.forEach(num => console.log(num));

console.log(result); 
// Output: undefined
// forEach() method doesn't return anything. It returns undefined. So, the value of result is undefined.
// forEach() method is used to execute a function once for each array element.
// forEach() method doesn't return anything. It returns undefined.
// forEach() method doesn't change the original array. It just iterates over the array elements.


// 1) map() method
let doubled = numbers.map(num => num * 2);
console.log(doubled); 
// Output: [2, 4, 6]
// map() method returns a new array with the results of calling a function for every array element.
// map() method doesn't change the original array. It returns a new array with the results of calling a function for every array element.   
// map() method is used to create a new array by manipulating the elements of the original array.

