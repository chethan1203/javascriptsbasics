const circle = {
    radius:1,
    draw(){
        console.log('this is draw circle');
    }

}

//use for in loop
const clncircle ={};
// for(let obj in circle){
//     clncircle[obj] = circle[obj];
//     console.log(clncircle);
// }

//using object.assigned method
// Object.assign(clncircle, circle)
// console.log(clncircle);

//assign to object
// const clncircle1 = Object.assign({}, circle);
// console.log(clncircle1);

//assign some value to the object and clone
// const clncircle2 = Object.assign({name:'chethan'}, circle);
// console.log(clncircle2);

//using spread ... operator
const clncircle3 = {...circle};
console.log(clncircle3);