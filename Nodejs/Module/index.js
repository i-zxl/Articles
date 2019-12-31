const fs = require('fs')
fs.readFile('./module.js', 'utf-8', function(err, data) {
  let context = `(function(exports,require, module, __filename, __dirname) { \n ${data} \n})`
  let m = eval(context)
  console.log(String(m))
})