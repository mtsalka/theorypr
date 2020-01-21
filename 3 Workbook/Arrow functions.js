'use strict';

let arrow1 = (a, b) => {
    console.log('234124');

    return a + b;
};

let arrow2 = (a, b) => a + b;
let pow = x => x ** 2;

const cars = [

    {
        color: 'blue',
        brand: 'bmw',
        model: '525',
        year: 2005,
    },
    {
        color: 'red',
        brand: 'audi',
        model: 'a6',
        year: 2015,
        tags: []
    },

    {
        color: 'black',
        brand: 'opel',
        model: 'omega',
        year: 1988,
    },
];


const result = cars
    .filter( car => car.year > 1990 )
    .map( car => `<div>${car.brand}</div>` )
    .filter( str => str.length > 5 )
    .join('<br/>');

console.log(result);


function sum() {

    for (const item of arguments) {
        console.log(item);
    }

}


sum(1,2,3,4,5)