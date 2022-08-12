const APIkey= "f2c8f9ff"

const moviesWatchlistDisplay = document.getElementById("movies-watchlist-display")
let myWatchlist = JSON.parse(localStorage.getItem("watchlist")) || []


if(myWatchlist.length > 0) {
    moviesWatchlistDisplay.innerHTML = ""
    moviesWatchlistDisplay.classList.remove("initial-display")
    for (let movie of myWatchlist) {
        getFullDetails(movie.id)
    }
}


document.addEventListener("click", (e) => {
    if (e.target.matches(".removeBtn")) {
      removeFromMyWatchlist(e)
    }
  })


function getFullDetails(movieId) {
    fetch(`https://www.omdbapi.com/?apikey=${APIkey}&i=${movieId}&plot=full`)
                .then(res => res.json())
                .then(data => {
                    renderHtml(data)
                })
}


function renderHtml(data) {

    const {Poster, Title, imdbRating, imdbID, Runtime, Genre, Plot} = data

    moviesWatchlistDisplay.innerHTML += `
    <section class="movie-card">
        <img src="${Poster}">
        <div class="movie-content">
            <div class="movie-title">
                <h3>${Title}</h3>
                <p>⭐ ${imdbRating}</p>
            </div>
            <div class="movie-info">
                <p>${Runtime}</p>
                <p>${Genre}</p>
                <button class="removeBtn" id="${imdbID}"><img class="remove-icon" src="images/remove-icon.svg" alt="-">Watchlist</button>
            </div>
            <div class="movie-body">
                <p>${Plot}</p>
            </div>
        </div>
    </section>
    `
}


function removeFromMyWatchlist(el) {
    myWatchlist = myWatchlist.filter((movie) => movie.id !== el.target.id)

    if (myWatchlist.length > 0) {
        localStorage.setItem("watchlist", JSON.stringify(myWatchlist))
        for (let movie of myWatchlist) {
            getFullDetails(movie.id)
            location.reload()
        }
    } else {
        localStorage.clear()
        moviesWatchlistDisplay.innerHTML = `
        <h3>Your watchlist is looking a little empty...</h3>
        <a href="index.html">
            <img class="plus-icon" src="images/plus-icon.svg" alt="+">
            Let's add some movies!
        </a>
        `
        moviesWatchlistDisplay.classList.add("initial-display")
    }
  }