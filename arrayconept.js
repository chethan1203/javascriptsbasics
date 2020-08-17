//array concept
const num = [3,4];
console.log(num);
console.log(num.length);
console.log(num[1]);
//add element end of the array
num.push(5,6);
console.log(num);
//add element in the begining of the array
num.unshift(1,2);
console.log(num);
//add element in middle of the array -->'2' indicate the position, '0' --> not deleting any element, 'A'and 'B' inserting 
//2 character   
num.splice(2,0, 'A', 'B');
console.log(num);

//how to print all the values from the array
for(const numb in num){
    console.log(num[numb]);
}
//find the values in array (premitive type)
console.log('-----------------------');
const num2 = [1,2,3,1,5,6];
console.log(num2.indexOf(6));
//------find the occurance of element
console.log(num2.indexOf(1, 1));

//find element in array ising non primitive way or (referene type)
const obj = [{name:'chethan', id:1}, {name:'Rashmi', id:2}, {name:'Avyakkth', id:3}];

const ele = obj.find(function(objcts){
    return objcts.name === 'chethan';
});
console.log(ele);

//using findIndex
const ele2 = obj.findIndex(function(objcts){
    return objcts.name === 'Rashmi';
});
console.log(ele2);
