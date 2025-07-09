/*
"use strict";  //treat all JS code as newer version

// alert(3+3) //this syntax works for browser for popups, but not for nodejs

console.log(3+3);
// to get documentation use mdn

let name="yesha"
let age=19
let isLoggedIn=false
let state=null

//number --> range:2^53 bigger than this--> bigint
//string --> "" or ''
//boolean --> true/false
//null --> data type but it is a stand alone value (empty) --> type gives 'object'
//undefined --> no assigned value --> type gives 'undefined'
//symbol --> to find uniqueness

//object 

console.log(typeof undefined) //undefined
console.log(typeof null);  //object

// 2 main types : primitive and non-primitive : depends on how they are accesses and stored

// primitive: (7 types) --> call by value

//String
//Number
//Boolean
//Null
//undefined
//symbol (to make something unique) typeof --> symbol

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId); //false

const bigNum=232324223423234232232n

//BigInt --> for extremely big numbers  ; typeof --> bigInt

// Reference (Non primitive) --> direct memmory access

//Arary // typeof --> object
//Objects // typeof --> object
//Functions // typeof --> function object

const heros=['shaktiman', 'naagraj', 'doga'];
let myObj = {
    name: 'yesha',
    age: 22,
}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNum);

// Is javascript is dynamically typed/ statically types : dynamically typed language

*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory

// stack  (primitive )  --> we get a copy of declared variable
// heap  (Non- primitive) --> we get reference of the original value

let myName='yesha' //primitive
let anotherName=myName  //a copy of myName is given to anotherName, not the original reference
anotherName="Nevil"

console.log(anotherName);
console.log(myName);

let user = {
    email : "yesha@gmail.com",
    upi : "17763"
}

let user2=user //not a copy but direct reference to the original memory

user2.email = "nevil@gmail.com"

console.log(user.email);
console.log(user2.email);



