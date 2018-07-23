const fs = require('fs')
const data = fs.readFileSync('./store.txt')
const output = `const data =  \`` + data + `\`` + "\nmodule.exports={data}"
fs.writeFileSync('store.js',output)