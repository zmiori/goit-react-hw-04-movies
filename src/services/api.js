import axios from 'axios';

const API_KEY = 'f4281987ff1e11314133014297f02dfc';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDI4MTk4N2ZmMWUxMTMxNDEzMzAxNDI5N2YwMmRmYyIsInN1YiI6IjYwMGYzYjllMGI1ZmQ2MDAzZTYwOGY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oS0aMJuojVSb35bDkWP07jS5C0Tm7-mmCAJIL3raQV8';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json;charset=utf-8',
};
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day');

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const fetchMovieSearchByName = async (query, page = 1) => {
  try {
    const { data } = await axios.get('/search/movie', {
      params: { query: query, page: page },
    });

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);

    return data;
  } catch (error) {
    console.log('error', { error });
    return {};
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);

    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const fetchMovieReviews = async (movieId, page = 1) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`, {
      params: { page: page },
    });

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};
