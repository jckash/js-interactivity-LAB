console.log("hello world");

const message = document.querySelector("#message")

function addMovie(event){
    event.preventDefault();
let = inputField = document.querySelector("input")

movie = document.createElement("li");

const movieTitle = document.createElement("span");
movieTitle.textContent = inputField.value;
addEventListener("click", crossOffMovie)
movie.appendChild(movieTitle)

const deleteBtn = document.createElement("button");
deleteBtn.textContent = ("x");
deleteBtn.addEventListener("click", deleteMovie);
movie.appendChild(deleteBtn);

const list = document.querySelector("ul");
list.appendChild(movie);

inputField.value = ''
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted"
}

document.querySelector("form").addEventListener("submit", addMovie)

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked") === true){
        message.textContent = "Movie Watched"
    } else {
        message.textContent = "Movie Added Back"
    }
}