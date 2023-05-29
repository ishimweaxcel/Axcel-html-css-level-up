//....................dom...........................................
//click
let fName = document.querySelector(".username");
let email = document.querySelector(".email");
let passWord = document.querySelector(".password");
let button = document.querySelector(".button");
// console.log(fName);
// console.log(email);
// console.log(button);
let allUsers=JSON.parse(localStorage.getItem("users")) || [];
console.log("users",allUsers);

button.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log("fullnames:",fName.value);
    console.log("email is:",email.value);
    console.log("password is:", passWord.value);
    const credentials = {
        fName: fName.value,
        email: email.value,
        passWord: passWord.value,
    }
    allUsers.push(credentials);
    localStorage.setItem("users", JSON.stringify(allUsers));
    window.location.href = "/Projects/login_form2.html"
    // console.log("credentials are:", credentials);
    // let userExists = false;
    // arrayStudent.forEach(users => {
    //     if(user.email === credentials.email){
    //         userExists = true;
    //     }
    // });

    // if (userExists){
    //     alert("A user with this email already exists");
    // }
    // else{
    //     const emailExists = arrayStudent.some(user => user.email === credentials.email);
    //     if (emailExists){
    //         alert("This email is already associated with another user account");
    //     }
    //     else{
    //         arrayStudent.push(credentials);
    //         console.log("the credentials are:", arrayStudent);
    //         localStorage.setItem("users", JSON.stringify(arrayStudent));
    //         alert("Welcome to the page!");
    //     }
    // }
} );






 
