import React from "react";

const MovieArray = (props) => {
    const Favourite = props.favourite;

    return (
        <>
            {props.movies.map((movie, index)=>
            <div className="image-container d-inline-flex justify-content-start m-4">
                <img src={movie.Poster} alt="movie"></img>
                <div onClick={()=> props.addFavouriteClick(movie)} className="touch d-flex align-items-center justify-content-center">
                    <Favourite />
                </div>
            </div>)}
        </>
    )
}

export default MovieArray;