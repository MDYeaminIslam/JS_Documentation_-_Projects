//arithmatic Operator
//Operand operator operand
/*
var a = 90;
var b = 100;
var result;
result = a + b;
var result1 = 2 ** 4;
console.log(result);
console.log(result1);
//increment operator variable++;
//decrement operator variable--;

//Sting Operator
var line1 = "Hello";
var line2 = "World";
console.log(line1 +" "+line2);
console.log(a +" "+line2);

//NAN -> Not a Number;
// Comparison Operator

console.log(10<20);
console.log(10 == "10"); // comparing value
console.log(10 === "10"); // comparing value and type
//!= not equal to
//!== not equal to value and type
// <,>,<=,>=

//Logical Operator
// && -> and
// || -> or
// ! -> not
// we can use +=,-+,*=,/=,%=, **=;
*/

// Convert Fahrenheit to Celsius
/*
var temp = prompt("Enter the temperature");
var result = 9/5 * temp + 32;
alert("Tempareture is "+ result +"Degree");
console.log("Task Completed");
*/


//For-In string/array/object
//For-Of array/string
/*
let name = "I am learning JavaScript";
let food = ["cake","apple","banana","mango","orange","grapes","pineapple","strawberry","cherry","watermelon"];

let person = {
    name: "Shakib Al Hasan",
    profession: "Cricketer",
    team: "Bangladesh",
    age: 34,
}
 */

//here var x storing the index of the string/array/object because of for-in loop

/*
for (var x in name){
    console.log(`index ${x} and item is ${name[x]}`);
}

for (var x of name){
    console.log(`item is ${x}`);
}
 */

//If we use for-in in object then it will show the key of the object
//If we use for-of in object then it will show error

/* 
printing this math.
1 + 4 + 9 + 16 =  30
var value = parseInt(prompt("Enter the value"));
var result = 0;
var series = "";

for (var i = 1; i <= value; i++){
    result += i**2;
    series += (i**2).toString();
    if (i==value){
        continue;
    }
    series += " + ";
}
console.log(`${series} =  ${result}`);

*/

//Functions
//Built in function Example: alert(), console.log();


//User defined function
//Declaration of function
/* 
function functionName(fname,lname){
    console.log(`${fname} ${lname}!`)
}
*/
//Execution of function
//var fn = "Md. Yeamin";
//var ln = "Islam";
//functionName(fn,ln);


//********************Function declaration*****************//

//Normal function declaration

/* 
function saysomething(name1){
    console.log(`Hello from Arrow function ! and this is ${name1}`);
}
saysomething("Yeamin");
*/

//Function expression
/* 
let saysomething1 = function(name2){
    console.log(`Hello from Arrow function ! and this is ${name2}`);
}
saysomething1("Yeamin");

*/
//Arrow function
/* 
let saysomething2 = (name3) =>{
    console.log(`Hello from Arrow function ! and this is ${name3}`);
}
saysomething2("Yeamin");

*/

//Array iteration using forEach
/* 
var foods = ["cake","apple","banana","mango","orange","grapes","pineapple","strawberry","cherry","watermelon"];

var numbers = [1,2,3,4,5,6,7,8,9,10];
*/

//forEach(function(item,index,array){})
/* 
foods.forEach(function(value,index,array){
    console.log(`${value} is at index ${index} and the array is ${array}`);
})
*/

//map function task
//we can create new array using map function from existing array

/*
var foods = ["cake","apple","banana","mango","orange","grapes","pineapple","strawberry","cherry","watermelon"];

var numbers = [1,2,3,4,5,6,7,8,9,10];

*/

//map(function(item,index,array){})
/*
function addsomething(item){
    return `${item} is a fruit`;
}

let arr_res = foods.map(addsomething);
console.log(arr_res);

*/



//Objects method in JavaScript
/* 
let person = {
    fname: "Md. Yeamin",
    lname: "Islam",
    dob: "01-01-1998",//object property can be number,string,array,object,function.
    fullname: function(){
        return `${this.fname} ${this.lname}`;
    }
}
console.log(person.fname);
console.log(person.fullname());
*/



// math object in JavaScript
/*
let val;

val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.4);
val = Math.sqrt(64);
val = Math.abs(-64);
val = Math.pow(2,3);
val = Math.min(2,3,4,5,6,7,8,9,10);
val = Math.max(2,3,4,5,6,7,8,9,10);
val = parseInt(Math.random() * 100);

console.log(val);

*/

//Date object in JavaScript
/*
let vall;
let today = new Date();
console.log(today);
*/

//Learn about other date method from w3school
//timestamp is the number of milliseconds since January 1, 1970 00:00:00 UTC.




//var and let and const
//let and const (ES6)
//var is function scope and let and const is block scope

//Global scope
/*
var a = 10;
let b = 20;
const c = 30;

console.log(`Global scope: ${a} ${b} ${c}`);

function test(){
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(`Function scope: ${a} ${b} ${c}`);
}

test();
console.log(`Global scope: ${a} ${b} ${c}`);
*/

//Class (Es6)
//class is a template for creating object

/*
class Person{
    constructor(fname,lname,dob){
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
    }
    calculateAge(){
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    fullname(){
        console.log(`${this.fname} ${this.lname}`);
    }
}

//creating object from class
let person1 = new Person("Md. Yeamin","Islam","01-01-1998");
let person2 = new Person("Md. Rabiul","Islam","08-01-1968");
let person3 = new Person("Shohidul","Islam","01-11-1999");

console.log(person1.calculateAge());
console.log(person2.fullname());
console.log(person3);
*/

class Person{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }
    greeting(){
        return `Hello ${this.fname} ${this.lname}`;
    }
    static test(){
        console.log("This is static method")
    }
}
//we can call static method without creating object.we can call static method using class name only. like console.log(Person.test());

//Inheritance
//Customer is a sub class of Person class. We have to use extends keyword to inherit Person class and super keyword to call Person class constructor.
class Customer extends Person{
    constructor(fname,lname,phone,membership){
        super(fname,lname);
        this.phone = phone;
        this.membership = membership;
    }
}
let person1 = new Person("Md. Yeamin","Islam");
console.log(person1);
console.log(person1.greeting());

let customer1 = new Customer("Md. Yeamin","Islam","01700000000","Standard");
console.log(customer1);