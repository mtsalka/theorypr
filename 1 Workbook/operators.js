// 1 - string
// 2 - number
// 3 - boolean
// 5 - undefined
// 6 - null
//
// 4 - object
// 7 - Symbol

let a = '2134423';

console.log(typeof a);

a = 1;

console.log(typeof a);


// унарная
let i = 0;

i++;
++i;

console.log(i);

// бинарные
let c = 1 + i;
let d = i - 1;

// тренарная опреация
console.log( i === 3 ? 'три' : 'не три');


// Динамическая типизация в опреация
let a1 = 1;
let a2 = 'a5px';

// к строке
let aResult = a1 + a2;
console.log(aResult);

// к числу
let aResult2 = a1 - parseInt('100111');
console.log(aResult2);

let isTrue = " "; // isNaN

// к булеан
if (isTrue) {
    console.log('true');
} else {
    console.log('false');
}

// while() {}
// for()

//

const lasBalance = 1 * 2;
const peny = '3';
const some  = 4;

let res1 = lasBalance + peny - some;

let str1 = '1234';
let str2 = "1234";
let str3 = `
    <div>
        <h1>Почему не сошелся баланс</h1>
        <p>${res1} ${function () {}}</p>
    </div>
`;

if (str1 === 1234) {
    console.log('true');
} else {
    console.log('false');
}


// приоритеты

let j = 0;


console.log(++j === j++);
console.log(j)
console.log(j++ === ++j);

for (let i = 0; i < 10; i += 1) {
    console.log(i);
}

i = i + 1;

i += 1;

// null vs undefined
console.log(typeof null);
console.log(typeof undefined);

console.log(typeof NaN);
console.log(typeof Infinity);

//
console.log(typeof function () {})
