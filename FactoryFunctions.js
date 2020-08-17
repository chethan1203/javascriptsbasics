//factory will produces number of objects

function createCircle(radius) {

    return {
        radius,
        draw() {

            console.log('This is circle');
        },
    }
}
let c1 = createCircle(1);
console.log(c1.radius);
c1.draw();
let c2 = createCircle(5);
console.log(c2.radius);
c2.draw();


//constructor function
//this is also use to create objects
//constructor name follow the pascal notation Name: OneTwoThree (Example)

function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('draw', radius);
    }
}

//how to call constructor function : use new keyword
const a = new Circle(10);
console.log(a);
console.log(a.radius);
a.draw();