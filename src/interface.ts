//? this is the type alisas where er declar type we can combine it also if we want
type User = {
    name : string,
    age : number
}

type Role = {
    role : 'admin' | 'user'
}

type UserWithRole = User & Role;

const user1 : User = {
    name : 'Shakib',
    age : 24
}

const user2 : User = {
    name : 'Tamim',
    age : 25
}

const user3 : UserWithRole = {
    name : 'Niloy',
    age : 46,
    role : 'admin'
}


//? interface 

interface IUser {
    name : string,
    age: number
}

interface IRole {
    role : 'admin' | 'user'
}

interface IUserWithRole extends IUser, IRole{
    //? we can also add some more properties here if we want 
    isActive ? : boolean
}

const user4 : IUser = {
    name : 'Ariyan',
    age : 23
}

const user5 : IUserWithRole = {
    name : 'Ahmed',
    age : 67,
    role : 'user',
    isActive : true 
}
console.log(user4)
console.log(user5)


//? the one main disadvantage of this interface is that we can not use it for the primitive data types that we can use with the type alias
//? interface - object 
//? objects - array, object, function etc

type IsAdmin = boolean;
const isAdmin : IsAdmin = true;
console.log(typeof isAdmin);


//? functions

type Add = (a : number, b : number)=> number;
interface IAdd { //? this is known as the indexing signature 
    (a : number, b : number) : number
}

const addNumbers : Add = (a, b) => a + b;
console.log(addNumbers(10, 20));

type Friends = string[];
const friends : Friends  = ['Shakib', 'Tamim', 'Niloy', 'Ariyan', 'Ahmed'];
console.log(friends);

//? through indexing we are assigning the type
interface ICloseFriends {
    [index : number] : string 
}
const closeFriends : ICloseFriends = ['Salam', 'Kalam',  'gelam', 'khailam', 'aslam'];
console.log(typeof closeFriends)
