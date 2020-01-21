'use strict';

function render({ text, color, options, tags }) {
    const { height } = options;
    const [ first, last ] = tags;

    console.log(last, first);
    console.log(`${text} ${height}`);

    if (color === 'red') {
        console.log(`${text}${color}`);
    }
}

const obj = {
    color: 'red',
    text: 'exit',
    options: {
        height: '100px'
    },
    tags: ['system', 'dontclick']
};

render(obj);



// пример деструктуризации массивов

const [ hh, mm, ss ] = '21:24:30'.split(':');

console.log(`Минут: ${mm}, секнуд: ${ss} ,часов: ${hh}`)