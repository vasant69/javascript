
// example 1

let p1={
    fname:"hitesh",
    lname:"vyas"
}


// let p2 = {    // instead of copyng manually, do it smartlly.
//     fname:p1.fname,
//     lname:p1.lname
// };

let p2 = {
    ...p1     
    };

p2.fname="vasant"
p2.lname="purohit"

// spread operator: copy the value of object into another object with key,value pair.

console.log(p2)
console.log(p1)



// example 2

let A11={
    name:"vasu",
    address:{
        location:"dahisar"

    }

}


let A22 = {
...A11
}


// if i change address location it will reflect in both object.

A11.address.location="borivali"

console.log(A11)
console.log(A22)

// note : spread operator does not work for nested object, it copies only level one object.


