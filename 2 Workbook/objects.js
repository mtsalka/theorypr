'use strict';

function render(button) {
    console.log(`
        <button style="background-color: ${button.color};">
            ${button.name}
        </button>
    `)
}


/// ...
let button = {
    name: 'submit',
    style: {
        color: 'red',
        width: '200px',
    },
    'привет мир': 'hello world',
    render: function (text) {
        console.log(this);
        console.log('Method', this.name, 'hello');
    }
}
// method

const button3 = button;
button = null;

button3.render('hello');

const fn = button3.render;
fn();


// .
console.log(button.name, button.name1234);
console.log(button.style.color)

button.name = '1234';
button.name1234 = '234'


// []
const key = 'name';
console.log(button[key], button['привет мир']);
console.log(button['style'].color);

let validate = function (name) {
    console.log(name.length);
}

validate('asfd')

console.log('___');

delete button.name1234;

for (let key in button) {
    console.log(key, button[key]);
}
console.log(button);



// Ссылочный
const button2 = button;
button2.name = 'button2';

console.log('___');

console.log(button.name);
console.log(button2 === button);


button.name = 'ddd';
console.log(button2.name);

const a = {};
const b = a

console.log(a === b);


