const{nextTick} = require('process');

console.log('start');

setTimeout(() => {
    console.log(process.env);
},0);

nextTick(() => {
    console.log('nextTick callback');
});
console.log('end');
