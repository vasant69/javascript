let p1={
    fname:"hitesh",
    lname:"vyas"
}


// let p2 = {
//     fname:p1.fname,
//     lname:p1.lname
// };

let p2 = {
    ...p1   // spread operator: copy the value of object into another object with key,value pair.  
    };

p2.fname="vasant"
p2.lname="purohit"


console.log(p2)
console.log(p1)


