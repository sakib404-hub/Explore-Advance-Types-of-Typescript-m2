"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Here we will learn about type assertion in TypeScript');
let anything;
anything = 10.3738383;
console.log(anything.toFixed(2));
console.log(typeof anything);
console.log(typeof anything);
let value = 10.28292;
let str = value;
console.log(typeof str);
const kgToGmConvertor = (input) => {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(' ');
        return `Converted output is ${Number(value) * 1000} gm`;
    }
};
const result1 = kgToGmConvertor(10);
const result2 = kgToGmConvertor('2 shakib');
console.log({ result1, result2 });
try {
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=typeAssertion.js.map