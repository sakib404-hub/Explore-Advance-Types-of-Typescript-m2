//? Generic --> dynamically generalize 

type GenericArray<value> = Array<value>;

// const rollNumbers : number[] = [39, 282, 289, 18, 29, 191, 298];
const rollNumbers : Array<number> = [39, 282, 289, 18, 29, 191, 298];

const isEligible : Array<boolean> = [true, false, false , true, true];
// const isEligible : boolean[] = [true, false, false , true, true];

const friends : Array<string> = ['Sakib', 'Tamim', 'Badsha', 'Imran', 'Sagor'];
// const friends : string[] = ['Sakib', 'Tamim', 'Badsha', 'Imran', 'Sagor'];


const squareFunction = (number : number) : number => number * number;
 console.log(squareFunction(2))
 console.log(squareFunction(8))

 const rollNumber2 : GenericArray<number> = [2, 1, 2, 3, 4,5];
 const betterwise  : GenericArray<string> = ['Jobbar', 'Moti', 'Sumon', "Mohabbot"];
 const isAdmin : GenericArray<boolean> = [true, true, false, false, true];

 //? we can use generic while using tuple

 type Coordinates<X, Y> = [X, Y];

//  type Coordinates = [number, number] 
 const coordinates : Coordinates<number, number> = [20, 30];
 const coordinates2 : Coordinates<string, string> = ['20', '30'];


 //? generic for object

 const userList : GenericArray<{name : string, age : number}> = [
    {name : " Sakib", age : 25},
    {name : " Sakura", age : 24},
    {name : " Naim", age : 22},
 ]