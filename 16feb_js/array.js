console.log("Hello World");


// data ------------------------ oprtions.
// let a = Symbol();
//console.log(typeof(a));


let person = {  // object
    name: "John",                   
    age: "32E",    
    partTime: false,    
    1.5: "hello"
};

//console.log(person.name);

// let convertedNum = parseInt(person.age);
// console.log(convertedNum);

let a = 10;
let b= 20;

let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;


//console.log(add, sub, mul, div, mod);

console.log(Math.random());

console

console.log(Math.random(1,6));


let arr = ["John", "Doe", 33, true, false, "hello"];

//console.log(arr.length)

arr.pop();


// let indexof = arr.indexOf("Doe");
// console.log();


let salesData = [
    {name: "John", age: 33, sales: 100},
    {name: "Doe", age: 34, sales: 200},
    {name: "Jane", age: 35, sales: 300},
    {name: "Smith", age: 36, sales: 400},
    {name: "Alex", age: 37, sales: 500},    
];          
let aa = salesData.reduce((acc, curr) => 
    acc.sales > curr.sales ?  curr.sales : 0);

console.log(aa);





