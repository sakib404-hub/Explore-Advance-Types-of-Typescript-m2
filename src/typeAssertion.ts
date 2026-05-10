console.log('Here we will learn about type assertion in TypeScript');

let anything : any;
anything = 10.3738383;

console.log((anything as number).toFixed(2));
console.log(typeof anything)
console.log(typeof (anything as string))

let value : unknown = 10.28292;
let str = (value as string);
console.log(typeof str);

const kgToGmConvertor = (input : string | number) : string | number | undefined =>{
    if(typeof input === 'number'){
        return input * 1000;
    }else if(typeof input === 'string'){
        const [value] = input.split(' ');
        return `Converted output is ${Number(value) * 1000} gm`;
    }
}

const result1 = kgToGmConvertor(10) as number;
const result2 = kgToGmConvertor('2 shakib') as string;
console.log({result1, result2}) 


//? this is another examle of type assertion 
type CustomErrorType = {
    message : string 
}
try{

}catch(err){
    console.log((err as CustomErrorType).message);
}
