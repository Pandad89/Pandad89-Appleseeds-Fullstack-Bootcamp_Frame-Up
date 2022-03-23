import React from "react";
import MovieHeader from "./Components/MovieHeader/MovieHeader";
import './Movies.css';
import MovieCarousels from "./Components/MovieList/MovieCarousels"
function Movies() {
    return (
        <div className="MoviesPage">
            <MovieHeader />
            <MovieCarousels />
            <MovieCarousels />
            <MovieCarousels />
            <div className="MoviePage__CarouselContainer"></div>
        </div>
    )
}

export default Movies;