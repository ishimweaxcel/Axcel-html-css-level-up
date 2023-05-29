let title = document.getElementById("title");
let description = document.getElementById("description");
let button = document.getElementById("btn");
// console.log(title);
// console.log(description);
// console.log(button);
let parentDiv = document.querySelector(".blogs")

let allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
console.log("blogs",allBlogs);

button.addEventListener ('click',(event) =>{
    event.preventDefault();
    alert("clicked");
    console.log("title is:", title.value);
    console.log("content is:", description.value);

let heading = document.createElement('h1');
heading.innerHTML = title.value;
parentDiv.appendChild(heading);
const blogUser = {
    title: title.Value,
    description: description.value
}
allBlogs.push(blogUser);
console.log("final array", allBlogs)
localStorage.setItem("blogs", JSON.stringify(allBlogs));
})