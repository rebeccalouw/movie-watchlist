const APIkey= "8fe13269"

const searchBar = document.getElementById("search-bar")
const searchBtn = document.getElementById("search-btn")
const moviesListDisplay = document.getElementById("movies-list-display")
const initialIcon = document.getElementById("initial-icon")

let moviesFoundArray = []
let movieSearch = []
let movieHtml = ``
let myWatchlist = JSON.parse(localStorage.getItem("watchlist")) || []

searchBtn.addEventListener('click', getMoviesFromSearchBar)

document.addEventListener("click", (e) => {
    if (e.target.matches(".addBtn")) {
      addToMyWatchlist(e)
    }
  })


function getMoviesFromSearchBar(e) {
    e.preventDefault()
    moviesListDisplay.innerHTML = ""
    moviesListDisplay.classList.remove("initial-display")
    initialIcon.style.display = "none"

    fetch(`https://www.omdbapi.com/?apikey=${APIkey}&s=${searchBar.value}&type=movie`)
        .then(response => response.json())
        .then(data => {
            if (data.Error) {
                renderErrorMessage()
            } else {
                moviesFoundArray = data.Search
                for (let movie of moviesFoundArray) {
                getFullDetails(movie.imdbID)}
            }
        })
        searchBar.value = ""
        }


function getFullDetails(movieId) {
    fetch(`https://www.omdbapi.com/?apikey=${APIkey}&i=${movieId}&plot=full`)
                .then(res => res.json())
                .then(data => { 
                    movieSearch.push(data)
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
                                <button class="addBtn" id="${imdbID}"><img class="plus-icon" src="images/plus-icon.svg" alt="+">Watchlist</button>
                            </div>
                            <div class="movie-body">
                                <p>${Plot}</p>
                            </div>
                        </div>
                    </section>
                    `
                    renderHtml(movieHtml)
                })
                moviesFoundArray = []
                movieHtml = ``
}


function renderHtml(movieHtmlInfo) {
    moviesListDisplay.innerHTML = movieHtmlInfo
}


function addToMyWatchlist(el) {
    const id = el.target.id
    const movie = movieSearch.find((movie) => movie.imdbID === id)
    const index = myWatchlist.findIndex((movie) => movie.imdbID === id)

    if (index === -1) {
        myWatchlist.push(movie)
        el.target.children[0].src = "images/check-icon.png"
        el.target.children[0].classList.remove("plus-icon")
        el.target.children[0].classList.add("check-icon")
    } 
    else {
        myWatchlist.splice(index, 1)
        el.target.children[0].src = "images/plus-icon.svg"
        el.target.children[0].classList.remove("check-icon")
        el.target.children[0].classList.add("plus-icon")
    }

    localStorage.setItem("watchlist", JSON.stringify(myWatchlist))

  }


function renderErrorMessage() {
    moviesListDisplay.innerHTML += `<p class="initial-display">Unable to find what you're looking for. Please try another search.</p>`
}



