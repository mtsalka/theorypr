'use strict';


function sum(a, b) {
    for (const item of arguments) {
        // console.log(item);
    }
}

sum(1, 2, 3, 4, 5, 6);




const a = [ 1, 2, 3 ];

a.push(4);
// console.log(a.pop());

a.test = '1234';

const b = { '0':1, '1':2, '2':3, length: 3 }

for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

console.log('___')

for (const item of a) {
    console.log(item);
}


console.log('___')

for (const key in a) {
    console.log(key);
}