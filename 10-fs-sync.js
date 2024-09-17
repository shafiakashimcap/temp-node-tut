// SYNCHRONOUS WAY

const { readFileSync, writeFileSync } = require('fs')
// const fs = require('fs')
// fs.readFileSync


// need to pass oin the file and the way you want node to read it ==> utf-8
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})