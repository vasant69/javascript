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





