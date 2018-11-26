let apiKey = 'ed4371fa'
let omdbUrl = `https://www.omdbapi.com/?apikey=${apiKey}&type=movie&`

let getMovieSearch = function(searchString) {
  return fetch(omdbUrl + "s=" + searchString) 
    .then(response=> response.json())
    .then(data=> data.Search)
    .catch(error=> handleError(error))
}

let getMovieById = function(id) {
  return fetch(omdbUrl + "i=" + id)
    .then(response=> response.json())
    .then(data=> data)
    .catch(error=> handleError(error))
}

let getFavorites = function() {
  return fetch('/favorites')
    .then(response=> response.json())
    .then(data=> data)
    .catch(error=> handleError(error))
}

let addToFavorites = function(movie) {
  let options = {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  }
  return fetch('/favorites', options)
    .then(response=> response.json())
    .then(data=> data)
    .catch(error=> handleError(error))
}