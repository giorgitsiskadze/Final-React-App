import React from "react";
import { useEffect, useState } from 'react'
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css'
import AddToFavourites from './AddToFavourites';
import MovieArray from './MovieArray';
import RemoveFromFavourites from './RemoveFromFavourites';
import axios from 'axios';
import MovieData from '../Movies.json';


const Home = () => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       debugger;
  //       const response = await axios.get('https://jsonbin.io/quick-store/6682e661acd3cb34a85fe706' + 'https://cors-anywhere.herokuapp.com/');
  //       setData(response.data);

  //       const a = response.data;
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


    // const getMovies = async () => {
    //     debugger
    //     let res = Movies;
    //     // const res = await fetch('https://jsonbin.io/quick-store/66819b0cacd3cb34a85f785b')
    //     // axios.get('https://jsonbin.io/quick-store/66819b0cacd3cb34a85f785b').then(item => {
    //     //     console.log(item)
    //     //     res = item.data;
    //     // })

    //     // const jsonres = res.json();

    //     console.log(res);
    // } 

    // useEffect(() => {
    //     getMovies();
    // }, [])

    const movieList = MovieData.slice(0, 30);
    


      const [movies, setMovies] = useState(movieList)
      const [recommendationMovies, setRecommendations] = useState([])
      const [favourites, setFavourites] = useState([]);
      
        const searchMovies = () => {
          let movieName = document.getElementById('search')?.value;
          if(movieName != null && movieName != '')
          {
            let searchedmovielist = movies.filter(x => x.Title.includes(movieName))
            if(searchedmovielist === null)
            {
                searchedmovielist = MovieData.slice(31, 100).filter(x => x.Title.includes(movieName))
            }
            setMovies(searchedmovielist);
            searchRecomendations()
          }
          else{
            setMovies(movieList)
          }
        }
    
        const searchRecomendations = () => {
          let movieName = document.getElementById('search')?.value;
          if(movieName != null && movieName != '')
            {
                let movieGenre = movies[1].Genre;
                setRecommendations(MovieData.slice(31,150).filter(x => x.Genre === movieGenre));
            }
        }
    
        const addMovieToFavourites = (movie) => {
            debugger
          const favouriteList = [...favourites,movie];
          setFavourites(favouriteList);
          saveFavouritesToLocalStorage(favouriteList);
          removeMovieFromFavourites(movie);
        }

        const removeMovieFromFavourites = (movie) => {
          const moviesList = movies.filter((item) => item.imdbID !== movie.imdbID);
          setMovies(moviesList);
      }

    
        const saveFavouritesToLocalStorage = (movies) => {
          localStorage.setItem('favourites-list', JSON.stringify(movies));
        }
    
        useEffect(() => {
          debugger
          const newFavourites = JSON.parse(localStorage.getItem('favourites-list'))
          if(newFavourites != null)
            {
                setFavourites(newFavourites);
            }
        }, [])

    return(
        <>
           <div className="container-fluid">
        <div className="d-flex m-4">
          <div className="col col-sm-4">
              <input 
              id='search'
              placeholder="Enter the name of the movie"
              className="form-control"
              onChange={() => {searchMovies()}}></input>
          </div>
        </div>
        <div className="column">
          <MovieArray movies={movies} favourite={AddToFavourites} addFavouriteClick={addMovieToFavourites} />
        </div>
        <div className="column">
          <h1>Reccomendations</h1>
          <MovieArray movies={recommendationMovies} favourite={AddToFavourites} addFavouriteClick={addMovieToFavourites}/>
        </div>
      </div>
        </>
    )
}

export default Home;