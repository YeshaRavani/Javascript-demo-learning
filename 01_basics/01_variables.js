const accountId=1
let accountEmail="yesha@gmail.com" 
var accountPassword="1234567" 
accountCity="Rajkot"
let accoutState; //by default undefined

//accountId=2 not allowed
accountEmail="yesha123@gmail.com"
accountPassword="123345"
accountCity="Jaipur"

/*
Prefer of not to use var because of issue of scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accoutState])