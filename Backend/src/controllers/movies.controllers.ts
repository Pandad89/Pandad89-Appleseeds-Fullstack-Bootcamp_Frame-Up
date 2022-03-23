import { Request, Response } from "express";

import apiUrl from "../apiUrl/apiUrl";

async function fetchPopularMovies(req: Request, res: Response) {
  try {
    let { pageNumber } = req.params;
    if (parseInt(pageNumber) < 1) pageNumber = "1";
    const { data } = await apiUrl.get(`/movie/popular?page=${pageNumber}`);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function fetchNowPlayingMovies(req: Request, res: Response) {
  try {
    let { pageNumber } = req.params;
    if (parseInt(pageNumber) < 1) pageNumber = "1";
    const { data } = await apiUrl.get(`/movie/now_playing?page=${pageNumber}`);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function fetchTopRatedMovies(req: Request, res: Response) {
  try {
    let { pageNumber } = req.params;
    if (parseInt(pageNumber) < 1) pageNumber = "1";
    const { data } = await apiUrl.get(`/movie/top_rated?page=${pageNumber}`);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function fetchTrendingMovies(req: Request, res: Response) {
  try {
    let { pageNumber } = req.params;
    if (parseInt(pageNumber) < 1) pageNumber = "1";
    const { data } = await apiUrl.get(
      `/trending/movie/week?page=${pageNumber}`
    );

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function fetchUpcomingMovies(req: Request, res: Response) {
  try {
    let { pageNumber } = req.params;
    if (parseInt(pageNumber) < 1) pageNumber = "1";
    const { data } = await apiUrl.get(`/movie/upcoming?page=${pageNumber}`);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function fetchMovie(req: Request, res: Response) {
  try {
    let { movieId } = req.params;
    const { data } = await apiUrl.get(
      `/movie/${movieId}?append_to_response=videos`
    );

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function searchMovie(req: Request, res: Response) {
  try {
    let { query } = req.params;
    const { data } = await apiUrl.get(`/search/movie?query=${query}`);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function searchMulti(req: Request, res: Response) {
  try {
    let { query } = req.params;
    const { data } = await apiUrl.get(`/search/multi?query=${query}`);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

//!genre/movie/list- ID GENERE

async function genreMovie(req: Request, res: Response) {
  try {
    const { data } = await apiUrl.get(`/genre/movie/list`);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function fetchGenreMovies(req: Request, res: Response) {
  try {
    let { pageNumber } = req.params;
    const { genreId } = req.params;
    if (parseInt(pageNumber) < 1) pageNumber = "1";
    const { data } = await apiUrl.get(
      `/discover/movie?page=${pageNumber}&with_genres=${genreId}`
    );

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function fetchVoteAverageMovies(req: Request, res: Response) {
  try {
    let { pageNumber } = req.params;
    if (parseInt(pageNumber) < 1) pageNumber = "1";
    const { data } = await apiUrl.get(
      `/discover/movie?page=${pageNumber}&vote_count.gte=100&sort_by=vote_average.desc`
    );

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

export {
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
};
