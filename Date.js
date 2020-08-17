const now = new Date();

//return only current date
console.log(now.getDate());
//current day/date
console.log(now.toDateString());
//Local time zone
console.log(now.toTimeString());
//Local date only
console.log(now.toLocaleDateString());
//Local time only
console.log(now.toLocaleTimeString());
//different date format
const date1 = new Date('March 12 1982 09:30:30');
console.log(date1);
const date2 = new Date(1982, 02, 12);
console.log(date2);

