//? enum that can be used as both the value and type that is the advantage of enum that we had

const UserRole = {
    Admin : 'Admin', //? fixed string value known as the literal type
    Editor : 'Editor',
    Viewer : 'Viewer'
} as const; //? adding as const to use the userRole as type

// UserRole.Admin = 'Amar Mon chacche!' --> this can not be used after the as const was used. After using this as const there used an access mofiers that is readonly means it can not be change 

//? typeOf operator
//! Keyof operator


const dashBoardAccess  = (role : keyof typeof UserRole) => {
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }else{
        return false
    }
}

console.log(dashBoardAccess(UserRole.Admin));
console.log(dashBoardAccess(UserRole.Editor));
console.log(dashBoardAccess(UserRole.Viewer));
