// Code to understand prototype in JS
//          - Every object in JS has a prototype
//          - Prototype is also an object
//          - All objects inherit their properties and methods from their prototype object
//          - When we create an object, JS engine automatically adds a prototype property to the object
//          - Prototype property is an object (object.prototype)
//          - We can add properties and methods to prototype property
//          - We can access the properties and methods of prototype property using the object

//          - Prototype property is shared among all objects created using the same constructor function
//          - Prototype property is not the prototype of the object itself
//          - It is the prototype of all objects created using the constructor function
//                                      

//          - Prototype chain: When we try to access a property of an object, JS engine first looks for the property in the object itself
//                             If it doesn't find the property in the object, it looks for the property in the prototype of the object
//                             If it doesn't find the property in the prototype, it looks for the property in the prototype of the prototype
//                       This process continues until the property is found or the prototype chain ends
//                     This is called prototype chain.


let obj = {
    name: "John",   // Data property        (key: name, value: John)                
    age: 30         // Data property        (key: age, value: 30)
}

// added a new property to object using prototype property
Object.prototype.game = function(){   // Prototype property
    return "Cricket kheloge"
}

//obj.game()  // Cricket khelega


console.log(obj.game())  


let obj2 = {
    address:"Delhi",
    salary:50000
}


console.log(obj2.game())  // Cricket khelega
// obj2 doesn't have game property but it is able to access it because of prototype chain
// obj2 doesn't have game property, so JS engine looks for the property in the prototype of obj2
// obj2 doesn't have prototype property, so JS engine looks for the property in the prototype of prototype of obj2
// obj2 doesn't have prototype of prototype property, so JS engine looks for the property in the prototype of prototype of prototype of obj2
// obj2 doesn't have prototype of prototype of prototype property, so JS engine looks for the property in the prototype of prototype of prototype of prototype of obj2
// obj2 doesn't have prototype of prototype of prototype of prototype property, so JS engine looks for the property in the prototype of prototype of prototype of prototype of prototype of obj2
//      - Prototype chain ends here
