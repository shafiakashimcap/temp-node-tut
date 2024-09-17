// npm - global command, comes with node 
// npm --version

// local depedency - use it only in this particular project 
// npm i <packageName>

// global dependcy - use it in any project
// npm install - g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info abut project/package)
// manual approach (create package.json in the root, create properties)
// npm init (tep by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)