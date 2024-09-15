let key = "391a4af5";
let movieNameRef = document.getElementById("movie-name");
let serchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3>Please Enter a Movie Name</h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
       
        result.innerHTML = `<div id="info">
            <img src=${data.Poster} class="poster"/>
            <div>
            <h2>${data.Title}</h2>
            <div class="rating">
            <img src="/star-removebg-preview.png"/>
            <h4>${data.imdbRating}</h4>
            </div>
            <div class="details">
            <span>${data.Rated}</span>
            <span>${data.Year}</span>
            <span>${data.Runtime}</span>
            </div>
            <div class="genre">
             <div>${data.Genre.split(",").join("<div></div>")}</div>
            </div>
            </div>
            </div>
            
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
             <p>${data.Actors}</p>
            `;
      });
  }
};

window.addEventListener("load", getMovie);
