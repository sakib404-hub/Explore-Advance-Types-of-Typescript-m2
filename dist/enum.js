"use strict";
//? enum 
//? set of fixed string literal is fixed to a particular place 
Object.defineProperty(exports, "__esModule", { value: true });
//? type that can be never used as value
const canEdit = (role) => {
    if (role === 'admin' || role === 'editor') {
        return true;
    }
    else {
        return false;
    }
};
console.log(canEdit('admin'));
console.log(canEdit('editor'));
// enum --> this is a type that can be used as a value also 
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
const dashBoardAccess = (role) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else {
        return false;
    }
};
console.log(dashBoardAccess(UserRole.Admin));
console.log(dashBoardAccess(UserRole.Editor));
console.log(dashBoardAccess(UserRole.Viewer));
//?The seniors do not recommend using the enum
//# sourceMappingURL=enum.js.map