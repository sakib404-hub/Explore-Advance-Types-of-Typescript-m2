//? today we will learn about the generic function

const createArrayWithNumber = (number : number) : number[] =>{
    return [number]
}

const createArrayWithString = (str : string) : string[] =>{
    return [str]
}

const createArrayWithUserObject = (value : {
    id : number,
    name : string
}) =>{
    return [value];
}

const arrString = createArrayWithString('shakib');
const arrNumber =  createArrayWithNumber(10);
const arrObj = createArrayWithUserObject({id : 12, name : 'Sakib Hossen'});
console.log({arrNumber, arrString, arrObj})

const createArrayWithGeneric = <T>(value : T) =>{
    return [value]
}

console.log(createArrayWithGeneric('sakib'));
console.log(createArrayWithGeneric(10));
console.log(createArrayWithGeneric({id : 123, name : 'akib'}));

//? tuple 
const createArrayWithTuple = <X, Y>(param1 : X, param2:Y)=>{
    return [param1, param2];
}

console.log(createArrayWithTuple('sakib', 10));
console.log(createArrayWithTuple('sakib', 'hossen'));
console.log(createArrayWithTuple('sakib', {name : 'Hossen', age : 22}));

//? enroll a student to a course

const studentToCourse = <T>(studentInfo : T) =>{
    return {courseName : 'Programming Hero',...studentInfo}
}

const student1 = {
    id: 123,
    name : 'Sakib',
    hasPen : true 
}
const student2 = {
    id : 1234,
    name : 'Mesba',
    hasCar : true,
    isMarried : true
}

console.log(studentToCourse(student1))
console.log(studentToCourse(student2));