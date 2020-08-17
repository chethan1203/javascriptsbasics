//for loop
//while loop
//do while loop
//for--in and for--off
//infinite loop

let str= 'hello world';
for(let i=0;i<5;i++){
    console.log(str);
}

//while loop
let n =1;
while(n<=10){
    console.log(n + ' while loop');
    n++;
}

//for-in loop simlar way what we have in java for each

const a = {name:'chethan', age:35, designation: 'Lead'};

for(let b in a)
    console.log(b, a[b]); //print the key and value both

    for(let b in a){
        console.log(b, a[b] + ' : using {} braces'); //print the key and value both
    }

const color = ['red', 'blue', 'white', 'blue', 'pink'];

for(let index in color)
    console.log(index, color[index]);

//for--off  used to read from array
for(let col of color)
   console.log(col + ' for of using');

    
