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

let aNumber:number = 20
let aString:string = 'my-str'
let abool:boolean = true

console.log(aNumber, aString, abool)
console.log(typeof(aNumber), typeof(aString), typeof(abool))

let greeting:string = 'hello'
//let name = String(prompt('Enter Your Name'))

//console.log(greeting, name)

type User = {
    name: string,
    age: number,
    loginStatus: boolean
}

let user1: User = {name:'Shalabh', age:10, loginStatus:true}

let user2: User = {name:'Jaiswal', age:20, loginStatus:false}

console.log(user1, user2)

console.log(`${user1.name} is ${user1.age} years old and is currently logged in? ${user1.loginStatus}`)

let users:User[] = [user1, user2]

console.log(users)

console.log(users[0])
console.log(users[1].name)

// spread operator will make a copy of he object
const user3:User = {...user1}
// make a modification in the copy
const user4:User = {...user1, age:22}

// unpack
const {name, age} = user4

console.log(name, age)

}