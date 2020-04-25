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