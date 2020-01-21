'use strict';

const cars = [
    {
        color: 'red',
        brand: 'audi',
        model: 'a6',
        year: 2015,
        tags: []
    },
    {
        color: 'blue',
        brand: 'bmw',
        model: '525',
        year: 2005,
    },

    {
        color: 'black',
        brand: 'opel',
        model: 'omega',
        year: 1988,
    },
];


const filtredElement = cars.filter(function (a) {
    if (a.year > 1990) {
        return true;
    } else {
        return false;
    }
});

console.log(filtredElement);
