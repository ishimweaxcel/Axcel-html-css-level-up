//......................login form/ dom_2..............

let userName = document.querySelector(".username");
let passWord = document.querySelector(".password");
let button = document.querySelector(".submit");
// console.log(userName);
// console.log(passWord);
console.log(button);
arrayUser=JSON.parse(localStorage.getItem("the array is:")) || [];
button.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log("Usernames are:", userName.value);
    console.log("Password is:", passWord.value);

    const credentials = {
        userName: userName.value,
        passWord: passWord.value
    };
    arrayUser.push(credentials);
    console.log("the credentials are:", arrayUser);
    localStorage.setItem("the array is:", JSON.stringify(arrayUser));
    alert("Welcome to the Page");
});
