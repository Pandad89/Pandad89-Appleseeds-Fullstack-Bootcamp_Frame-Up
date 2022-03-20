import React from "react";
import MovieHeader from "./Components/MovieHeader/MovieHeader";
import './Movies.css';

function Movies() {
    return (
        <div className="MoviesPage">
            <MovieHeader />
            <div className="MoviePage__CarouselContainer"></div>
        </div>
    )
}

export default Movies;