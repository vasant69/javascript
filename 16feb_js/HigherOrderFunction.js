let cal = function(opertion,a,b){
    return opertion(a,b)
}

let add = function(a,b){
    return a+b
}

let sub = function(a,b){        
    return a-b
}

let divide = function(a,b){
    return a/b
}

let multiply = function(a,b){   
    return a*b
}


console.log(cal(add,2,5))

console.log(cal(sub,2,5))

console.log(cal(divide,2,5))

console.log(cal(multiply,2,5))