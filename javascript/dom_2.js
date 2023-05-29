//......................login form/ dom_2..............

let userName = document.querySelector(".username");
let passWord = document.querySelector(".password");
let button = document.querySelector(".submit");
// console.log(userName);
// console.log(passWord);
// console.log(button);
let allUser=JSON.parse(localStorage.getItem("users")) || [];
console.log("users", allUser);
button.addEventListener('click', (event) =>{
    event.preventDefault();
    let filteredUser = allUser.filter(item => item.userName === userName.value);
    if(filteredUser.length != 0){
        alert("Welcome my Guy");
    }else{
        alert("ooh come on register first");

    }
    // console.log("Usernames are:", userName.value);
    // console.log("Password is:", passWord.value);

    
});
