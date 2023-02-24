const APIkey= "8fe13269"


const moviesWatchlistDisplay = document.getElementById("movies-watchlist-display")
let myWatchlist = JSON.parse(localStorage.getItem("watchlist")) || []
let movieHtml = ``

document.addEventListener("click", (e) => {
    if (e.target.matches(".removeBtn")) {
      removeFromMyWatchlist(e)
    }
  })

  if(myWatchlist.length > 0) {
    moviesWatchlistDisplay.innerHTML = ""
    moviesWatchlistDisplay.classList.remove("initial-display")
    for (let movie of myWatchlist) {
        getFullDetails(movie.imdbID)
    }
}


function getFullDetails(movieId) {
    fetch(`https://www.omdbapi.com/?apikey=${APIkey}&i=${movieId}&plot=full`)
                .then(res => res.json())
                .then(data => { 
                    const {Poster, Title, imdbRating, imdbID, Runtime, Genre, Plot} = data

                    movieHtml += `
                    <section class="movie-content">
                        <div class="movie-card">
                            <img src="${Poster}" class="movie-poster">
                            <h3 class="movie-title">${Title}</h3>
                            <p class="movie-rating">⭐ ${imdbRating}</p>
                            <p class="movie-runtime">${Runtime}</p>
                            <p class="movie-genre">${Genre}</p>
                            <button class="addBtn" id="${imdbID}"><img class="plus-icon" src="images/plus-icon.svg" alt="+">Watchlist</button>
                            <p class="movie-body">${Plot}</p>
                        </div>
                    </section>
                    `
                    renderHtml(movieHtml)
                })
                movieHtml = ``
}


function renderHtml(movieHtmlInfo) {
    moviesWatchlistDisplay.innerHTML = movieHtmlInfo
}

function removeFromMyWatchlist(el) {
    myWatchlist = myWatchlist.filter((movie) => movie.imdbID !== el.target.id)

    if (myWatchlist.length > 0) {
        localStorage.setItem("watchlist", JSON.stringify(myWatchlist))
        for (let movie of myWatchlist) {
            getFullDetails(movie.imdbID)
            location.reload()
        }
    } else {
        localStorage.clear()
        moviesWatchlistDisplay.innerHTML = `
        <h3 class="empty-watchlist">Your watchlist is looking a little empty...</h3>
        <a href="index.html">
            <img class="plus-icon" src="images/plus-icon.svg" alt="+">
            Let's add some movies!
        </a>
        `
        moviesWatchlistDisplay.classList.add("initial-display")
    }
  }