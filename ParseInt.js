let arr = ["111111111", "2"];
// console.log(arr.map(parseInt));  // [1, NaN, NaN, NaN, NaN]


let b = arr.map((e => e.length));  // [false, true]

console.log(b);  // [undefined, undefined]  



let arrnum = ["1", "2", "3", "h", "5"];
let a2= arrnum.map((e => Number(e)));
console.log(arrnum);  // ["1", "2", "3", "h", "5"]

console.log(a2)
console.log(typeof(a2[4])); 



diff = [1, 2, 3, 4, 5].map((e, i, arr) => {
    return e + arr[i+1];
});