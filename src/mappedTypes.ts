//? mapped types


const arrOfNumbers : number[] = [1, 4, 5, 7, 10];
const arrOfStrings : string[] = ['Sakib', 'apple', 'banana', 'orenge'];

const arrOfStringUsingMap : string[] =  arrOfNumbers.map((num) => num.toString());
console.log(arrOfStringUsingMap);


//? mapped types
const user = {
    id : 2222,
    name : 'Chulbul kha'
}
console.log(user['id']);

type AreaOfNumbers = {
    height : number,
    width : number
}

type height = AreaOfNumbers['height']; //? getting the type number from another type

type AreaOfString = {
    height : string,
    width : string
}

type AreaOfStringUsingMap = {
    [key in 'height' | 'width'] : string
}

type AreaOfBool = {
    [key in keyof AreaOfNumbers] : boolean
}
//? doing it too much using the generic
type Area<T> = {
    [key in keyof T] : T[key]
}

const area1 : Area<{height : string, width : number}> = {
    height  : '50k',
    width : 60
}