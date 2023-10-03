import React, { useState } from "react";

function Body() {
  //set needed state variables and initial values
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [searchData, setSearchData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);
  const [favouriteId, setFavouriteId] = useState(0);

  //function for handling search by sending a request to
  //our express web server and storing the results in state
  async function handleSearch(searchTerm, searchCategory) {
    let encodedTerm = encodeURI(searchTerm);
    const response = await fetch(
      `/search/?search=${encodedTerm}&category=${searchCategory}`
    );
    const data = await response.json();
    setSearchData(data.results);
  }

  //function for adding an item to favourites by asssigning each item a
  //unique ID and saving that along with its data to state
  function handleFavourite(event) {
    let i = event.currentTarget.id;
    let newData = { id: favouriteId, data: searchData[i] };
    setFavouritesData((favouritesData) => [...favouritesData, newData]);
    setFavouriteId((favouriteId) => favouriteId + 1);
  }

  //function for deleting items in the favourites by reforming the list
  //of favourites in state, excluding the given unique ID
  function handleDelete(event) {
    let id = Number(event.currentTarget.id);
    setFavouritesData((favouritesData) =>
      favouritesData.filter((entry) => {
        return entry.id !== id;
      })
    );
    console.log(favouritesData);
  }

  return (
    <div className="body-container">
      {/* search function including a form with a select field 
       to select a category to search and a text field to enter 
       the search query */}
      <div className="search-container">
        <h2>Search:</h2>
        <form>
          <label>Search Term:</label>
          <input
            type="text"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          ></input>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="all">All Media</option>
            <option value="movie">Movies</option>
            <option value="podcast">Podcasts</option>
            <option value="music">Music</option>
            <option value="musicVideo">Music Videos</option>
            <option value="audiobook">Audio Books</option>
            <option value="shortFilm">Short Films</option>
            <option value="tvShow">TV Shows</option>
            <option value="ebook">eBooks</option>
          </select>
          <button
            type="button"
            id="search-submit"
            onClick={() => handleSearch(searchTerm, category)}
          >
            Search
          </button>
        </form>
      </div>

      {/* container that displays the results of our API call search
      in text blocks and includes functionality for adding them to the 
      list of favourites */}
      <div className="results-container">
        <div className="grid-head">
          <h2>Results:</h2>
        </div>
        <div className="grid">
          {searchData.map((result, i) => (
            <div className="grid-item" key={i}>
              <div>Name: {result.trackName}</div>
              <div>Artist: {result.artistName}</div>
              <div>Collection: {result.collectionName}</div>
              <div>Content Type: {result.kind}</div>
              <div className="grid-url">
                URL: <a href={result.trackViewUrl}>{result.trackViewUrl}</a>
              </div>
              <button
                type="button"
                className="grid-btn"
                id={i}
                onClick={handleFavourite}
              >
                Add to Favourites
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* section for storing our favourites and the functionality
      for deleting them from the list of favourites */}
      <div className="favourites-container">
        <div className="grid-head">
          <h2>Favourites:</h2>
        </div>
        <div className="grid">
          {favouritesData.map((result) => (
            <div className="grid-item" key={result.id}>
              <div>Name: {result.data.trackName}</div>
              <div>Artist: {result.data.artistName}</div>
              <div>Collection: {result.data.collectionName}</div>
              <div>Content Type: {result.data.kind}</div>
              <div className="grid-url">
                URL:
                <a href={result.data.trackViewUrl}>
                  {result.data.trackViewUrl}
                </a>
              </div>
              <button
                type="button"
                className="grid-btn"
                id={result.id}
                onClick={handleDelete}
              >
                Delete Favourite
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
