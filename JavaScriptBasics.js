//data types
//var or let can be used to intilize the variable
let name = 'Selenium';
let version = '3.5.3';
console.log(name +' ' + version);

//like fianal can not change the value, remove let when declaring constant
const num1 =10;

//2 type of data type premative and undefined
//string, int, boolean
let str = 'javascript';
let num = 10;
let flag =true;
let isActive =false;
let price;
let wheels =undefined;

//java script is a dynamic in nature, we can change the data type from one type to another
let srt1 = 'chethan';
srt1 = 20;

//refrence type data types
//Arrays
//functionns
//objects


//objects
let user = {
    name: "chethan",
    age: 25
};
console.log(user.age);
console.log(user.name);

//Array in javascript :Dynamic in nature it can accept any data type

let langmix = ['kannada', 'english', 20, 'hindi'];
console.log(langmix);

//function : creating function in javascript we can execute the function by calling the function name

function chethan(){
    let a =10;
    let b =20;
    console.log("The sum of 2 number " +(a+b));
}

//execute the function by calling the function name
chethan();

//function with parameter
function greet(name){
    console.log('Name is ' + name);
}

greet('chethan');

function greet1(name, version){
    console.log('Name is ' + name);
    console.log('version is ' + version);
}

//if we dont pass any value to the parameter it throws undefiend
greet1();
greet1('selenium', 4.3);

//return from function
function add(num1, num2){
 return num1+num2;
}
let sum = add(10, 20);
console.log(sum);

function squareroot(num){
    let square = num*num;
    return square;
}

let sqr = squareroot(2);
console.log(sqr);
