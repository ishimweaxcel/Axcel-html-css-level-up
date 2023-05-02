//string concantinng
//variable declaration
//let, const //data type

// let firstName = "Ishimwe";
// let secondName = "Axcel";
// let thirdName = "Brilliant";
// let age = prompt("What is your age");
// let a = 2;
// let b = 5;
// let students = ["ndizihiwe", "Kanyana", "nyiransengimana","munezero","Ishimwe Axcel","richard"]
// let mystudentsAge = [1,2,3,4,5,6];
// let sum = mystudentsAge[a] + mystudentsAge[b];
// if (a <= mystudentsAge.length && b <= mystudentsAge.length){
//     console.log("Sum is", sum);
// }
// else{
//     console.log(` a or b doesn't exist at ${mystudentsAge}`);
// }
// let numbers = prompt("Give the number in Range !!!")
// let number = 3;
// let numbers2 = ["One", "Two", "Three", "Four", "Five","Six","Seven", "Eight", "Nine", "Ten"];
// if (number <= numbers2.length){
//     console.log(numbers2[number - 1]);
// }
// else{
//     console.log("not in Range");
// }

// console.log(sum || `no value at this index ${mystudentsAge}`);
// if (sum <= mystudentsAge.length){
//     console.log("nice work");
// } 
// else{
//     console.log("no index")
// }
// console.log(students.length)
// console.log("sum:", sum);
// if (sum < students.length){
//     console.log("welcome Mr:", students[sum]);
// }
// else{
//     console.log(`there is no value at ${sum}`);
// }

// console.log("Welcome to my home page");
// console.log(firstName + " " + secondName);
// console.log(2+2);
// console.log("4");
// console.log("myArray:" + " " + mystudentsAge);


// if(firstName === "Ishimwe" && secondName === "Axcel"){
//     console.log("correct!!!");
// }
// else if(thirdName === "Brilliant"){
//     console.log("nice try my friend !!!");
// }

// if(age >=18){
//      console.log("You are allowed to drink alchol but drink responsibly and don't drink and drive !!!!");
// }
// else{
//     console.log("You are not allowed to drink, my friend you are still young ");
// }


// functions

/*
1.arrow function
let functionName = () =>{

}
calling a function:
functionName();
2.function parameter
let functionName = (parameter1,parameter2......,parametern) =>{

}
3.return 
terminate a function

*/

// let output = (name) =>{
//     if(name === "kanyana"){
//       return  console.log("true kanyana");
//     }
//     console.log("hi");
//     console.log(`function is called with name:${name}`);
// }

// let number = (num) =>{
//     return num;
// }
 
// // output("kanyana");
// console.log(number(23));

// //console.log(call a function);

// //console.log(checkResult("8"));

// let arrayExample = [1,2,3,4,5,6,5,3];
// let StudentsNames = ["Ishimwe", "Munzero","Edith", "Kanyana"];

// let filteredArray = arrayExample.filter((item) => item === 5);
// console.log("filtered Array:", filteredArray);
// let filteredStudents = StudentsNames.filter((item) => item ==="Kanyana");
// if(filteredStudents.length>0){
//   console.log("resuts found:",filteredStudents);
// }
// else{
//   console.log("error");
// }

// // for (let i = 0; i < 3; i++){
// //   console.log("value of i:",i);
// //   console.log("just look at");
// // }
// let displayArray = (number) =>{
//   return number;
// }
// console.log(displayArray(arrayExample));

let fullName = [{"firstName": "Axcel","age":20},{"firstName": "Edith","age": 18},{"firstName":"Grace", "age":17},{"firstName":"Kanyana","age": 16}];
let filteredFullName = fullName.filter((item) => item.age ===17);

console.log("fullName", filteredFullName);
 
  


