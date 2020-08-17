let hour=20;

if(hour>=6 && hour<12){
   console.log('Good morning');
}else if(hour>=12 && hour<=18){
    console.log('Good Afternoon');
}else {
    console.log('Good night')
}

//find the max number
let a =1500;
let b= 800;
let c= 900;

// if(a>b && a>c){
//     console.log(a + ' is a big number');
// } else if(b>c){
//     console.log(b + ' is a big number');
// }else{
//     console.log(c + ' is a big number');
// }

//we can write in both way
// if(a>b && a>c) console.log(a + ' is a big number');
// else if(b>c) console.log(b + ' is a big number');
// else console.log(c + ' is a big number');

//switch
let role = 'guest';

switch(role){
    case  'admin': console.log('Admin user');
    break;
    case 'guest' : console.log('Guest User');
    break;
    case 'user' : console.log('Normal User');
    break; 
    default : console.log('Not a User')
}
