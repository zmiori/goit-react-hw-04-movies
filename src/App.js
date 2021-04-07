import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Container from './components/Container';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import MoviesPage from './pages/MoviesPage';

const App = () => {
  return (
    <Container>
      <NavBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
