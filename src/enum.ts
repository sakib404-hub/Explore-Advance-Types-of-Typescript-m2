//? enum 
//? set of fixed string literal is fixed to a particular place 

type User = 'admin' | 'editor' | 'viewer'; //? fixed type string literal
//? type that can be never used as value

const canEdit = (role : User)=>{
    if(role === 'admin' || role === 'editor'){
        return true;
    }else{
        return false ;
    }
}
console.log(canEdit('admin'));
console.log(canEdit('editor'));

// enum --> this is a type that can be used as a value also 
enum UserRole {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer'
}

const dashBoardAccess  = (role : UserRole) => {
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }else{
        return false
    }
}
console.log(dashBoardAccess(UserRole.Admin));
console.log(dashBoardAccess(UserRole.Editor));
console.log(dashBoardAccess(UserRole.Viewer));

//?The seniors do not recommend using the enum becauise for every enum there is a block of code in the js