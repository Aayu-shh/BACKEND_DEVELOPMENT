console.log("Hello World");

//Access to FileSystem - Creating NEW textFile with some data in it through NODE.js
const fs = require('fs');

fs.writeFileSync('hello.text',"Hello from Node.js");