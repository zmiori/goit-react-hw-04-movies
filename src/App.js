import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Container from './components/Container';
import NavBar from './components/NavBar';
// import HomePage from './pages/HomePage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
// import NotFoundPage from './pages/NotFoundPage';
// import MoviesPage from './pages/MoviesPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));

const App = () => {
  return (
    <Container>
      <NavBar />

      <Suspense fallback={<h1>LOADING...</h1>}>
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
      </Suspense>
    </Container>
  );
};

export default App;
