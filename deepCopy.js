//    Example 1   deep copy: creates another copy from obj.

let d1 = {
district:"mumbai"
}



let d2 ={
    ...d1
}

console.log(d1)

// for creating deep copy we use multiple techniqs, this one is one of them.

// D1kastring is obj 
// converted into string using json stringyfy method.

const D1kastring= JSON.stringify(d1)
console.log(D1kastring)


// re-converted to obj using parse method. 

const d1kaobj = JSON.parse(D1kastring)
console.log(d1kaobj)


////output:
// line no 21 :  D1kastring: '{"district":"mumbai"}'
// line no 27 : d1kaobj: { district: 'mumbai' }


// here is the process....(behind the scene)

//  func obj   -->  string --> copy --> object 



// this is most generic way to make deep copy. 
// non-primi --> primitive --> copy --> non-primitive.

// what is serializarion and deserialization ???
// Here is Deserialization process '{"district":"mumbai"}' ====>  { district: 'mumbai' }
// Here is Serialization process  { district: 'mumbai' }  ===>   '{"district":"mumbai"}' 