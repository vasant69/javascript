// let tasks = [
// 	{ description: "Write report", completed: false, priority: 2},
// 	{ description: "Send email", completed: true, priority: 3},
// 	{ description: "Prepare presentation", completed: false, priority: 1},
// ];

// tasks.filter((task=>task.completed))


let rating =[
{restaurant: "KFC", rating:[2,5,6]},
{restaurant: "Burger King", rating:[2,5,6]},
{restaurant: "Dominos", rating:[2,5,6]},
{restaurant: "Subway", rating:[2,5,6]},
{restaurant: "Pizza Hut", rating:[2,5,6]},
];

let sum = rating.reduce((acc, item)=>{
    return acc + item.rating.reduce((acc, item)=> acc + item, 0);
}, 0);


console.log(sum);
