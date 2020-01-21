// Логичская  && || !

const isTrue = true;

console.log(!isTrue);
const name = 'вася1';

if (name === 'вася' || name === 'Petya') {
    console.log('Известное имя')
} else {
    console.log('Не изестное имя')
}


if (name) {
    console.log('name not null');
}

//

function showMessage(isValid) {

    if (!isValid) {
        console.log('не все ок')
    }

}

showMessage(false);

console.log(!!'');

//

console.log(0 && 6)
console.log(0 || 6)


function test(value) {
    value = value || 'значение по умолчанию'
    console.log(value);
}

test('1234');