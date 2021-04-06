import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
import { fetchTrendingMovies } from '../../services/api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <Fragment>
      <h1>Trending today</h1>
      <ul className={s.list}>
        {trendingMovies.map(movie => {
          if (movie.title) {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          }
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.name}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default HomePage;
