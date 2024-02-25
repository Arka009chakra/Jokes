
document.getElementById("btn").addEventListener("click",joke)

function joke(){
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.getElementById("yoyo").innerHTML = data.joke;
    })
    
}


















