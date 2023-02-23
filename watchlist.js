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