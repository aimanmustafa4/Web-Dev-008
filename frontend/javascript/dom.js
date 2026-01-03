console.log(window);
console.log(document);
// OLD WAY OF GRABING ELEMENTS IN DOM
let oneHead = document.getElementsByClassName("heading");
oneHead[0].innerHTML = "We are from Web-Dev-008";
console.log(oneHead);

let paraOne = document.getElementById("para");
paraOne.innerHTML = "WE ARE ACCESSING THE PARAGRAPH HERE TO SHOW THAT WE ARE LEARNING DOM";
console.log(paraOne);


// NEW WAY FOR THE SAME PROCESS
let primeButton = document.querySelectorAll("#btn");
primeButton[0].innerHTML = "add here";
console.log(primeButton);
