//value type : string, integer, boolean, symbol, undefined, null
//Reference type :  Object, Array, Functions

//by value
let x =10;
let y =x;
x=30;
console.log(x);
console.log(y);

//by reference object
let ex = {
    name : 'chethan'
}

let ex1 = ex;
ex.name ='Rashmi';
console.log(ex.name);
console.log(ex1.name);
