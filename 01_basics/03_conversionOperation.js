let score = '33abc'

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);  //NaN : not a number

score = null
valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber); //0

score = undefined
valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN

score = true
valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber); //1

// "33" --> 33
// "33abc" --> NaN
// true --> 1 , false --> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true

let a="yesha"
let boolean_a=Boolean(a)
console.log(boolean_a);  //true

a=""
boolean_a=Boolean(a)
console.log(boolean_a); //false

// 1--> true ; 0--> false
// "" --> false
// "yesha" --> true

let num=33
let str_num=String(num)
console.log(str_num); //"33"

