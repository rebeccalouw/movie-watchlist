# Movie Watchlist 🎬

#### ✨ Deployed/demo version ![https://main--rebecca-movie-watchlist.netlify.app/index.html](https://main--rebecca-movie-watchlist.netlify.app/index.html)

## Demo overview
This project consists of two pages: a Homepage and a Watchlist Page. 

Possible actions:
- Inputting a movie title into the search bar and then clicking the 'Search' button
- Once movie options are displayed, the user can add a movie their watchlist by clicking on the '+' button on the screen
- Clicking on 'My Watchlist' allows the user to access their curated movie watchlist
- If the user wishes to remove a movie from this watchlist, the user can do so by clicking on the '-' button on the screen


## Developer overview
- The majority of the app was built with JavaScript
- The app uses the user input from the search bar to inform the API call 
- The API returns data relative to the movie title searched for
- That data is used to create the HTML and display the movie options on screen
- Once the user clicks to add a movie to their watchlist, that information is converted into strings and saved in localStorage
- All the saved movie titles can be accessed on the 'My Watchlist' page by parsing the data saved in localStorage
- If a user chooses to remove a title from their watchlist, localStorage is updated to remove that movie


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
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a> 
<a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a>  
