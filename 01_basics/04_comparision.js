//console.log(2>1);

// > < >= <= == !=

//console.log("2">1); //string is converted to number and compared
//console.log("02">1)

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

// the reason is the equality check == and comparisions < > >= <= work differently.
// comparisions convert null to a number, treating it as 0
//so null>=0 is true and null>0 is false

console.log(undefined == 0); // always false for all comparisions

// === strict check

console.log("2" ==2); //true
console.log("2" ===2); //false






