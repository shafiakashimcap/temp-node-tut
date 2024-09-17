// built in module like os, fs, path, http in node.js
// we can't interact with file system for e.g. when using js in browser
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


//method returns the system in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)