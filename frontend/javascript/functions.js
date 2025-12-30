let person ={
    userName : "Yasir",
    userAge : 23, 
    userCity : "bahawalpur"
}
console.log(person);
// console.log(person.userCity);
// console.log(person.userName);
// console.log(person['userAge']);



// function works as a packet for storing and using a variable by passing parameters and arguments
// function have 2 parts
// 1- function ki definition
// 2- to call off a function



// 1st part
function greet(userName,userAge){
    console.log(userName);
    console.log(userAge);
}


// 2nd part
// greet("Ayaz",15);


function add(a,b){
    console.log (a+b);
}


add(4,5);