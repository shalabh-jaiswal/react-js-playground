var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    console.log('Hello Tampa Folks This is a TypeScript!!!');
    alert('Testing Typescript....!');
    /*const balance = 100
    const account = 'ABCD123'
    
    console.log(balance, account)
    console.log(balance + account)
    
    console.log(typeof account)
    
    let mutableBalance:number = 1000
    mutableBalance = 2000
    
    console.log(mutableBalance)*/
    //let deposit = Number(prompt('deposit amount'))
    // this won't work coz the promt returns a string and the code below will do a string concat
    //mutableBalance += deposit
    // use this trick to convert a str to number
    //mutableBalance += +deposit
    //console.log('your new balance is', mutableBalance)
    /*
    Usefull Extensions
    
    ESLint = code quality checks
    Path Intellisense = helps with path imports
    Prettier = code formatter (with shortcut key shift alt f)
    */
    var aNumber = 20;
    var aString = 'my-str';
    var abool = true;
    console.log(aNumber, aString, abool);
    console.log(typeof (aNumber), typeof (aString), typeof (abool));
    var greeting = 'hello';
    var user1 = { name: 'Shalabh', age: 10, loginStatus: true };
    var user2 = { name: 'Jaiswal', age: 20, loginStatus: false };
    console.log(user1, user2);
    console.log("".concat(user1.name, " is ").concat(user1.age, " years old and is currently logged in? ").concat(user1.loginStatus));
    var users = [user1, user2];
    console.log(users);
    console.log(users[0]);
    console.log(users[1].name);
    // spread operator will make a copy of he object
    var user3 = __assign({}, user1);
    // make a modification in the copy
    var user4 = __assign(__assign({}, user1), { age: 22 });
    // unpack
    var name_1 = user4.name, age = user4.age;
    console.log(name_1, age);
}
