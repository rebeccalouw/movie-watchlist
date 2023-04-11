# Movie Watchlist 🎬

#### ✨ Deployed/demo version ![https://main--rebecca-movie-watchlist.netlify.app/index.html](https://main--rebecca-movie-watchlist.netlify.app/index.html)

## Demo overview
This project consists of two pages: a Homepage and a Watchlist Page. 
The user types a movie in the search bar, the app reaches out to the OMDb API and once the results are displayed, the user can add the movie to their personal watchlist (using LocalStorage). By clicking on 'My Watchlist', the user can visualise their list and remove items that are not relevant anymore.

Possible actions:
- Typing a movie title on the search bar
- Once novie options are displayed, choosing the right movie and clicking to add it to the user's personal watchlist
- Clicking on 'My Watchlist' allows to access the curated movie watchlist
- Once the movies are not relevant to the users anymore, they can click to remove it from the watchlist


## Developer overview
- The majority of the app was built with Javascript
- The app uses the input from the search bar to inform the API call 
- The API provides data with the movie titles searched for
- That data is used to create the html and render the movie options to the screen
- Once the user clicks to add movie to watchlist, that information is saved in Local Storage 
- All the saved movie titles can be accessed on the 'My Watchlist page'
- If a user chooses to remove the title from the watchlist, Local Storage is updated to remove that movie
- At the moment there is no backend to this app

<br/>

<img alt="demo screenshot" src="images/movie-watchlist-desktop1.png" width="400px"/>

<br/>

<img alt="demo screenshot" src="images/movie-watchlist-mobile1.png" width="250px" display="inline-block"/> <img alt="demo screenshot" src="images/movie-watchlist-mobile2.png" width="250px" display="inline-block"/> <img alt="demo screenshot" src="images/movie-watchlist-mobile3.png" width="250px" display="inline-block"/> 


## API
- ![OMDb API](http://www.omdbapi.com/)

## Author: 
👩‍💻 Rebecca Louw ![@rebeccalouw](https://github.com/rebeccalouw)

## Built with:
<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>  
