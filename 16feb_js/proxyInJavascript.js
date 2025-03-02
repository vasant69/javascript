// Proxy is a feature in ES6 that allows us to create a proxy object that wraps another object 
// or function and intercepts operations like reading/writing properties and others,
//  either to provide different behavior or to provide additional functionality.



// Proxy is a constructor that takes two arguments: target and handler.
// target: the object to wrap
// handler: an object that defines the interceptors, which are functions that provide property access.

// The handler object can define the following traps:
// get: intercepts property access
// set: intercepts property assignments
// apply: intercepts function calls


arr = [1,2,3,4,5,6]

function proxyExample(arr){
    return new Proxy(arr, {
        get(target, prop){
            if(prop in target){
                return target[prop]
            }else{
                return 'Property does not exist'
            }
        }
    })
}

console.log(proxyExample(arr)[10]) // 1

console.log(arr[1])

