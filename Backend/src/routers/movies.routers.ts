import express from "express";

import {
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchMovie,
  searchMovie,
  searchMulti,
  genreMovie,
  fetchGenreMovies,
  fetchVoteAverageMovies,
} from "../controllers/movies.controllers";

const moviesRouter = express.Router();

moviesRouter.get("/fetchPopularMovies/:pageNumber", fetchPopularMovies);
moviesRouter.get("/fetchNowPlayingMovies/:pageNumber", fetchNowPlayingMovies);
moviesRouter.get("/fetchTopRatedMovies/:pageNumber", fetchTopRatedMovies);
moviesRouter.get("/fetchTrendingMovies/:pageNumber", fetchTrendingMovies);
moviesRouter.get("/fetchUpcomingMovies/:pageNumber", fetchUpcomingMovies);
moviesRouter.get("/fetchMovie/:movieId", fetchMovie);
moviesRouter.get("/SearchMovie/:query", searchMovie);
moviesRouter.get("/SearchMulti/:query", searchMulti);
moviesRouter.get("/genreMovie", genreMovie);
moviesRouter.get("/fetchGenreMovies/:pageNumber/:genreId", fetchGenreMovies);
moviesRouter.get("/fetchVoteAverageMovies/:pageNumber", fetchVoteAverageMovies);

export { moviesRouter };
