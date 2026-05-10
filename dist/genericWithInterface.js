"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const poorDeveloper = {
    name: 'Mr Poor',
    salary: 20000,
    device: {
        brand: 'Lenovo',
        model: 'Lenovo Y21',
        releasedYear: '2023'
    },
    isDeveloper: true,
    smartWatch: {
        isHeartRateCheckter: true,
        stopWatch: true
    },
    bike: {
        model: 'Yahamaha',
        engineCapacity: '200cc'
    }
};
console.log(poorDeveloper);
const richDeveloper = {
    name: 'Mr Rich',
    salary: 2219999,
    device: {
        brand: 'Huawei',
        model: 'Y Max',
        releasedYear: '20021'
    },
    smartWatch: {
        isRolex: true,
        price: '1.5M'
    }
};
console.log(richDeveloper);
const add = (num1, num2 = 0) => {
    return num1 + num2;
};
console.log(add(2, 5));
console.log(add(2));
//# sourceMappingURL=genericWithInterface.js.map