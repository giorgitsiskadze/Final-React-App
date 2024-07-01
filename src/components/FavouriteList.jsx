import React from "react";
import { useEffect, useState } from 'react'
import RemoveFromFavourites from './RemoveFromFavourites';
import MovieArray from "./MovieArray";
import AddToFavourites from "./AddToFavourites";
import MovieData from '../Movies.json';

const FavouriteList = () => {

    const topMovies = MovieData.sort((x, y) => Number(x.Metascore) - Number(y.Metascore)).slice(0, 10);
      const [movies, setMovies] = useState(topMovies)

    const saveFavouritesToLocalStorage = (movies) => {
        localStorage.setItem('favourites-list', JSON.stringify(movies));
      }

    const removeMovieFromFavourites = (movie) => {
        const favouriteList = favourites.filter((item) => item.imdbID !== movie.imdbID);
        setFavourites(favouriteList);
        saveFavouritesToLocalStorage(favouriteList);
    }

    useEffect(() => {
        const favourites = JSON.parse(localStorage.getItem('favourites-list'))
        setFavourites(favourites);
    }, [])

    const [favourites, setFavourites] = useState([]);

    const addMovieToFavourites = (movie) => {
      const favouriteList = [...favourites,movie];
      setFavourites(favouriteList);
      saveFavouritesToLocalStorage(favouriteList);
    }

    return (
        <>
            <h1 className="favtitle m-4">Favourites</h1>
            {favourites?.map((movie, index)=>
            <div className="image-container d-inline-flex justify-content-start m-4">
                <img src={movie.Poster} alt="movie"></img>
                <div onClick={()=> removeMovieFromFavourites(movie)} className="touch d-flex align-items-center justify-content-center">
                    <RemoveFromFavourites />
                </div>
            </div>)}
            <div className="column">
            <h1 className="favtitle m-4">Top 10 tranding</h1>
            <MovieArray movies={movies} favourite={AddToFavourites} addFavouriteClick={addMovieToFavourites}/>
            </div>
        </>
    )
}

export default FavouriteList;