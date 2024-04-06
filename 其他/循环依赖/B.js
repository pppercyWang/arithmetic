module.exports = {
    B: 'this is b Object'
};
let a = require('./A');

console.log('B: before logging a');
console.log(a);
console.log('B: after logging a');
