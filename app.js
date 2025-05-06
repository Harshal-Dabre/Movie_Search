







let apiKey = "https://www.omdbapi.com/?i=tt3896198&apikey=cedb8aba&t=";

let title = document.getElementById('title');
let desc = document.getElementById('desc');
let date = document.getElementById('date');
let ratings = document.getElementById('ratings');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let collection = document.getElementById('collection');
let genre = document.getElementById('genre');
let poster = document.getElementById('poster');
 

function search(){
    let query = document.getElementById("movie_search").value ;
    let  api = apiKey+query ;
    console.log(api);
    fetch(api).then((movieData)=>{
        return movieData.json()
    }).then((movie)=>{
        title.innerText = movie.Title;
        date.innerText = movie.Released;
        desc.innerText = movie.Plot;
        actors.innerText = movie.Actors;
        director.innerText = movie.Director;
        ratings.innerText = movie.imdbRating;
        collection.innerText = movie.BoxOffice;
        genre.innerText = movie.Genre;
        poster.src = movie.Poster
    })

}
