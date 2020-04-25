const name = 'josip';
const last = 'subašić';

if(name === 'josip' || (name === 'josip' && last === 'subašić')) {
    console.log('Cool name bro');
}

const isAwesomeName = 'awesome'.includes(name);
if(isAwesomeName) {
    console.log('Super cool name bro');
}

function nameIsAwesome = (name) {
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