//This below concept hoghlights destructuring Arrays 
/*
let arr = ["John", "Smith"]

let [firstName, lastName] = arr;

console.log(firstName);
console.log(lastName);
*/

//ignoring 2nd  uwanted elements

let [firstName, ,title] = ["Julius", "Ceaser", "Consul", "of the roman Empire" ]

console.log(firstName);
console.log(title);

let user = {};
[user.name, user.surname] = "John Smith".split(" ");
console.log(user.name);
console.log(user.surname);


// acessing the rest of the Arrays using destructturing 

let [firstName1, title1, ...rest] = ["Julius", "Ceaser", "Consul", "of the roman Empire" ]

console.log(firstName1);
console.log(title1);
console.log(rest);
console.log(rest.length);




