module.exports = {
    A: 'this is a Object'
};
let b = require('./B');
console.log('A: before logging b');
console.log(b);
console.log('A: after logging b');

