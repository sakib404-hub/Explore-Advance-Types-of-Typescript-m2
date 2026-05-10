"use strict";
//? today we will learn about the generic function
Object.defineProperty(exports, "__esModule", { value: true });
const createArrayWithNumber = (number) => {
    return [number];
};
const createArrayWithString = (str) => {
    return [str];
};
const createArrayWithUserObject = (value) => {
    return [value];
};
const arrString = createArrayWithString('shakib');
const arrNumber = createArrayWithNumber(10);
const arrObj = createArrayWithUserObject({ id: 12, name: 'Sakib Hossen' });
console.log({ arrNumber, arrString, arrObj });
const createArrayWithGeneric = (value) => {
    return [value];
};
console.log(createArrayWithGeneric('sakib'));
console.log(createArrayWithGeneric(10));
console.log(createArrayWithGeneric({ id: 123, name: 'akib' }));
//? tuple 
const createArrayWithTuple = (param1, param2) => {
    return [param1, param2];
};
console.log(createArrayWithTuple('sakib', 10));
console.log(createArrayWithTuple('sakib', 'hossen'));
console.log(createArrayWithTuple('sakib', { name: 'Hossen', age: 22 }));
//? enroll a student to a course
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
console.log(studentToCourse(student1));
console.log(studentToCourse(student2));
//# sourceMappingURL=genericWithFunction.js.map