'use strict';

const cars = [
    {
        color: 'red',
        brand: 'audi',
        model: 'a6',
        year: 2015,
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

let result = '';

for (const car of cars) {

    if (car.year < 1990) {
        continue;
    }

    result += `
        <h1>${car.brand}</h1>
        <p>${car.color}/${car.model}</p>
    `;
}

// console.log(result);
const result2 = map(cars, function (car) {
    return `
        <h1>${car.brand}</h1>
        <p>${car.color}/${car.model}</p>
    `;
});


function map(arr, fn) {
    const mapResult = [];

    for (const item of arr) {
        const fnResult = fn(item);
        mapResult.push(fnResult);
    }

    return mapResult;
}

console.log(result2);














