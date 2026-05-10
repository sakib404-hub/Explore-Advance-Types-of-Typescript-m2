"use strict";
//? keyOf - this is a type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myvechile = 'car';
console.log(myvechile);
const user = {
    id: 222,
    name: 'Sakib',
    address: {
        city: 'Tangail'
    }
};
console.log(user['name']);
console.log(user['id']);
console.log(user['address'].city);
const getPropertiesFromObj = (obj, key) => {
    return obj[key];
};
console.log(getPropertiesFromObj(user, 'name'));
//? another example
const product = {
    brand: 'Hp',
    price: 2000,
    model: 'Hp Victus'
};
console.log(getPropertiesFromObj(product, 'brand'));
//# sourceMappingURL=keyOf.js.map