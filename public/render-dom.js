let clearSearchResults = function() {
  searchResults.innerHTML = ''
}

let clearMovieDetails = function() {
  movieDetails.innerHTML = ''
}

let showFavorites = function(movies) {
  movies.map(movie=> {
    let listElement = createFavoritesElement(movie)
    searchResults.appendChild(listElement)
  })
}

let createFavoritesElement = function(movie) {
  // Text
  let textNode = document.createTextNode(movie.name)

  // <a>
  let linkElement = document.createElement('a')
  linkElement.setAttribute('href', '#')
  linkElement.setAttribute('data-imdb-id', movie.oid)
  linkElement.append(textNode)
  linkElement.addEventListener('click', events.onMovieLinkClick)

  // <li>
  let listElement = document.createElement('li')
  listElement.append(linkElement)

  return listElement  
}

let createSearchResultElement = function(movie) {
  // Text
  let textNode = document.createTextNode(movie.Title)

  // <a>
  let linkElement = document.createElement('a')
  linkElement.setAttribute('href', '#')
  linkElement.setAttribute('data-imdb-id', movie.imdbID)
  linkElement.append(textNode)
  linkElement.addEventListener('click', events.onMovieLinkClick)

  // <button>
  let buttonElement = document.createElement('button')
  buttonElement.setAttribute('data-name', movie.Title)
  buttonElement.setAttribute('data-oid', movie.imdbID)
  buttonElement.addEventListener('click', events.onAddToFavoritesClick)
  let buttonTextNode = document.createTextNode('Add to Favorites')
  buttonElement.append(buttonTextNode)

  // <li>
  let listElement = document.createElement('li')
  listElement.append(linkElement)
  listElement.append(buttonElement)

  return listElement
}

let showSearchResults = function(movies) { 
  movies.map(movie=> { 
    let listElement = createSearchResultElement(movie)
    searchResults.appendChild(listElement)
  })
}

let showMovieDetails = function(movie) {
  let titleTextNode = document.createTextNode(movie.Title)
  let titleElement = document.createElement('h2')
  titleElement.append(titleTextNode)

  let yearTextNode = document.createTextNode(`(${movie.Year})`)
  let yearElement = document.createElement('span')
  yearElement.append(yearTextNode)
  titleElement.append(' ')
  titleElement.append(yearElement)

  let genreTextNode = document.createTextNode(movie.Genre)
  let genreElement = document.createElement('h3')
  genreElement.append(genreTextNode)

  let plotTextNode = document.createTextNode(movie.Plot)
  let plotElement = document.createElement('p')
  plotElement.append(plotTextNode)

  let ratingTextNode = document.createTextNode(`Rated ${movie.Rated}`)
  let ratingElement = document.createElement('small')
  ratingElement.append(ratingTextNode)

  movieDetails.append(titleElement)
  movieDetails.append(genreElement)
  movieDetails.append(plotElement)
  movieDetails.append(ratingElement)
}