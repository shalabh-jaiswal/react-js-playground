console.log('Hello Tampa Folks!!!');
alert('Testing....!');

const balance = 100
const account = 'ABCD123'

console.log(balance, account)
console.log(balance + account)

console.log(typeof account)

let mutableBalance = 1000
mutableBalance = 2000

console.log(mutableBalance)

let deposit = prompt('deposit amount')
// this won't work coz the promt returns a string and the code below will do a string concat
//mutableBalance += deposit


// use this trick to convert a str to number
mutableBalance += +deposit

console.log('your new balance is', mutableBalance)
