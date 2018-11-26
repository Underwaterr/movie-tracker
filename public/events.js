
let events = {
  onMovieLinkClick(event) {
    event.preventDefault()
    clearSearchResults()
    clearMovieDetails()
    let id = event.target.getAttribute('data-imdb-id')
    getMovieById(id)
      .then(movie=> {
        showMovieDetails(movie)
      })
      .catch(error=> handleError(error))
  },

  onSearchFormSubmit(event) {
    event.preventDefault()
    clearSearchResults()
    clearMovieDetails()
    let searchString = document.getElementById('search-string').value
    getMovieSearch(searchString)
      .then(results=> {
        showSearchResults(results)
      })
      .catch(error=> handleError(error))
  },

  onShowFavoritesClick(event) {
    event.preventDefault()
    clearSearchResults()
    clearMovieDetails()
    getFavorites()
      .then(favorites=> {
        showFavorites(favorites)
      })
      .catch(error=> handleError(error))
  },

  onAddToFavoritesClick(event) {
    event.preventDefault()
    let movie = {
      name: event.target.getAttribute('data-name'),
      oid: event.target.getAttribute('data-oid')
    }
    addToFavorites(movie)
      .then(favorites=> {
        clearSearchResults()
        showFavorites(favorites)
      })
      .catch(error=> handleError(error))
  }  
}