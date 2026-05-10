interface Developer<T, X = null> {
    name : string,
    salary : number,
    device ? : {
        brand : string,
        model : string,
        releasedYear : string
    },
    isDeveloper ? : boolean,
    smartWatch : T,
    bike ? :  X 
}

type watchWithouitBrand = {
    isHeartRateCheckter : boolean,
    stopWatch : boolean
}
type bikeModel = {
    model : string,
    engineCapacity :  string
}

const poorDeveloper : Developer<watchWithouitBrand, bikeModel> = {
    name : 'Mr Poor',
    salary : 20000,
    device : {
        brand : 'Lenovo',
        model : 'Lenovo Y21',
        releasedYear : '2023'
    },
    isDeveloper : true,
    smartWatch : {
        isHeartRateCheckter : true,
        stopWatch : true
    },
    bike : {
        model : 'Yahamaha',
        engineCapacity : '200cc'
    }
}
console.log(poorDeveloper);

type watchWithBrand = {
    isRolex : boolean,
    price : string
}


const richDeveloper : Developer<watchWithBrand> = {
    name : 'Mr Rich',
    salary : 2219999,
    device : {
        brand : 'Huawei',
        model : 'Y Max',
        releasedYear : '20021'
    },
    smartWatch : {
        isRolex : true,
        price : '1.5M'
    }
}
console.log(richDeveloper);


const add = (num1 : number, num2 : number = 0) : number =>{
    return num1 + num2;
}
console.log(add(2, 5));
console.log(add(2));