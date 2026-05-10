"use strict";
//? rules that are needed to be followed 
//? constrains --> strict rules that are needed to be followed
Object.defineProperty(exports, "__esModule", { value: true });
const studentToCourse = (studentInfo) => {
    return { courseName: 'Programming Hero', ...studentInfo };
};
const student1 = {
    id: 123,
    name: 'Sakib',
    hasPen: true
};
const student2 = {
    id: 1234,
    name: 'Mesba',
    hasCar: true,
    isMarried: true
};
const student3 = {
    id: 272,
    name: 'Niloy',
    hasWatch: true
};
console.log(studentToCourse(student1));
console.log(studentToCourse(student2));
console.log(studentToCourse(student3));
//# sourceMappingURL=constrains.js.map