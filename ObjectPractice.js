let tea ={
    name:"tata",
    type:"caffine",
    caffine:true
}

// print the object
console.log(tea)

// add color property in tea object.
tea.color="black"

console.log(tea)

// copy the tea object into tea1 object.(using spread operator)
// copy type is shallow copy.
const tea1 ={
    ...tea
}

// CHECK whether color property exist in tea object or not ???
console.log("color" in tea)


// LOOP THE ALL TEA VALUE FROM OBJECT.
for(let key in tea){
    console.log(key +":"+tea[key])
}

// DELETE THE PROPERTY FROM OBJECT.
delete tea.color
console.log(tea)

// <IMP> here are we are just providing the reference of object not creating any copy.
// const anothercopy = tea
