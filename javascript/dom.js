//....................dom...........................................
//click
let fName = document.querySelector(".username");
let email = document.querySelector(".email");
let passWord = document.querySelector(".password");
let button = document.querySelector(".button");
console.log(fName);
console.log(email);
console.log(button);
arrayStudent=JSON.parse(localStorage.getItem("the array is:")) || [];
button.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log("firstname is",fName.value);
    console.log("secondname is",email.value);
    console.log("password is", passWord.value);
    const credentials = {
        fName: fName.value,
        email: email.value,
        passWord: passWord.value,
    };
    let userExists = false;
    arrayStudent.forEach(user => {
        if(user.email === credentials.email){
            userExists = true;
        }
    });
    if (userExists){
        alert("A user with this email already exists");
    }
    else{
        const emailExists = arrayStudent.some(user => user.email === credentials.email);
        if (emailExists){
            alert("This email is already associated with another user account");
        }
        else{
            arrayStudent.push(credentials);
            console.log("the credentials are:", arrayStudent);
            localStorage.setItem("the array is:", JSON.stringify(arrayStudent));
            alert("Welcome to the page!");
        }
    }
} );






 
