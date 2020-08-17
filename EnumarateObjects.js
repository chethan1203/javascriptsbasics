//Enumarating Properties of an object : to get all the proerties of an object

const circle = {

    radius :1,
    draw(){
        console.log('Draw circle');
    }
};

//for in loop 
for(let key in circle) console.log(key, circle[key])

console.log('------------------')

for(let key of Object.keys(circle)) console.log(key, Object.keys(circle))

console.log('------------------')

for(let entry of Object.entries(circle)) console.log(entry)
