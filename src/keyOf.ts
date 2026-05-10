//? keyOf - this is a type operator

type RichpeopleVechile = {
    car : string, //? key : valuie
    bike : string, //? key  : valuie
    cng : string //? key : value
}

type MyVechile2 = keyof RichpeopleVechile;
type MyVechile = "bike" | 'car' | 'cng'; //? this is known as the string litera type

const myvechile : MyVechile2 = 'car';
console.log(myvechile);

type User = {
    id : number,
    name : string,
    address : {
        city : string
    }
}

const user : User = {
    id : 222,
    name : 'Sakib',
    address : {
        city : 'Tangail'
    }
}


console.log(user['name']);
console.log(user['id']);
console.log(user['address'].city);

const getPropertiesFromObj = <X>(obj : X, key : keyof X) =>{
    return obj[key]
}
console.log(getPropertiesFromObj(user, 'name'));

//? another example
const product = {
    brand : 'Hp',
    price : 2000,
    model : 'Hp Victus'
}
console.log(getPropertiesFromObj(product, 'brand'));