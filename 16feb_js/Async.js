var fs = require('fs/Promise');

let file = fs.readFile('./data.txt', 'utf-8')
.then((data) => {
    (data) => {
        console.log(data);
    }
})
