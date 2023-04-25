//string concantinng
//variable declaration
//let, const //data type

// let firstName = "Ishimwe";
// let secondName = "Axcel";
// let thirdName = "Brilliant";
// let age = prompt("What is your age");
let a = 2;
let b = 5;
let students = ["ndizihiwe", "Kanyana", "nyiransengimana","munezero","Ishimwe Axcel","richard"]
let mystudentsAge = [1,2,3,4,5,6];
let sum = mystudentsAge[a] + mystudentsAge[b];
if (a <= mystudentsAge.length && b <= mystudentsAge.length){
    console.log("Sum is", sum);
}
else{
    console.log(` a or b doesn't exist at ${mystudentsAge}`);
}
let numbers = prompt("Give the number in Range !!!")
let numbers1 = [1,2,3,4,5,6,7,8,9,10];
let numbers2 = ["One", "Two", "Three", "Four", "Five","Six","Seven", "Eight", "Nine", "Ten" ];
if (numbers === numbers1 && numbers2.length <= numbers1.length){
    console.log(numbers1[numbers2]);
}
else{
    console.log("not in Range");
}




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


