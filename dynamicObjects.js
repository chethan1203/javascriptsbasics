const car = {
    color: 'red',
    wheel: 4,
    start(){
        console.log('The smart start button');
    }
}
console.log(car);

//add more properties to the car obejct dynamically
car.price = 50000;
car.model = 'AS45';
car.theftSAfety = function(){}
console.log(car);

//we can delete properties of object using delete keyword
delete car.model;
console.log(car);

