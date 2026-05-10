//? conditional type : this means the type is dependednt on a condtion

type A = null;
type B = undefined;

// type C = A extends null ? true : false;
type C = A extends null ? true : 
         B extends undefined ? true : false;
//? that means the type of c depends on A and B therefore it is a conditional type

type RichPeople = {
    bike : string,
    car : string,
    ship : string
}
type CheckVechile<T> = T extends keyof RichPeople ? true : false;
type hasBike = CheckVechile<'pen'>