// Flow control

const name = 'josip';
const last = 'subašić';

if(name === 'josip' || (name === 'josip' && last === 'subašić')) {
    console.log('Cool name bro');
}

const isAwesomeName = 'awesome'.includes(name);
if(isAwesomeName) {
    console.log('Super cool name bro');
}

function nameIsAwesome(name) {
    return 'awesome'.includes(name);
}

if (nameIsAwesome('josip')) {
    console.log('Cool name josip')
}

const values = [[], {}, -10, 1, 0, '', 'full string', ' ',
undefined, NaN, null,];

console.group('truthy or falsy values');
values.forEach(value => {
    if(value) {
        console.log(value, 'is truthy');
    } else {
        console.log(value, 'is falsy');
    }
});
console.groupEnd();

//Conditional Abuse

// Coercion
const isCool = true;

if(!isCool) {
    console.log('You are not cool')
}

// Ternary

const count = 88;
// let word;
// if(count === 1) {
//    word = 'item';
// } else {
//    word = 'items';
// }

// 1. Condition 
// 2. what to do if true 
// 3. what to do if false

const word = count === 1 ? 'item' : 'items';
const sentence = `You have ${count} item${count === 1 ? '' : 's'} in your cart`;
console.log(sentence);

function showAdminBar() {
    console.log('Showing admin bar');
 }
const isAdmin = false;
// isAdmin ? showAdminBar() : null;

// AND AND TRICK

function check1() {
    console.log('Running check 1');
    return true;
}
function check2() {
    console.log('Running check 2');
    return false;
}
function check3() {
    console.log('Running check 3');
    return true;
}
if(check1() && check2() && check1()) {
    console.log('All checks pass');
} else {
    console.log('Some checks failed');
}

// isAdmin ? showAdminBar() : null;
isAdmin && showAdminBar();

if (isAdmin) { showAdminBar(); }

