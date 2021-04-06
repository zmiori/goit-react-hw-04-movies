import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

// import {
//   fetchTrendingMovies,
//   fetchMovieSearchByName,
//   fetchMovieDetails,
//   fetchMovieCast,
//   fetchMovieReviews,
// } from './services/api';
import Container from './components/Container';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
  return (
    <Container>
      <NavBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <p>MOVIES</p>
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
