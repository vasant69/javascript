// what is array ???

//1)  arrays are resizable and can contain a mix of different data types
//2) arrays are zero-indexed
//3)  array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// array banate hai.
let fruits = ['mango', 'apple', 'banana'] 

// values bataiye
console.log('array values is:',fruits)

// array object ki key bataiye
console.log(Object.keys(fruits));

// values bataiye
console.log(Object.values(fruits));

// eski length kitni hai
console.log(fruits.length)

// tino ke daam add kijiye and store kijiye
fruits.push('280 rs')
console.log(fruits)

// kiwi bhi add kijiye
fruits.push('kiwi')
console.log(fruits)

// kiwi khatte hai nikal dijiye.
fruits.pop('kiwi')
console.log(fruits)

// we have total 10 bags to bring fruits.
fruits.length=10
console.log(fruits)
fruits.length