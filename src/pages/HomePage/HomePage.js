import { Fragment, useState, useEffect } from 'react';
import s from './HomePage.module.css';
import { fetchTrendingMovies } from '../../services/api';
import MovieListItem from '../../components/MovieListItem';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <Fragment>
      <h1>Trending today</h1>
      {trendingMovies && (
        <ul className={s.list}>
          {trendingMovies.map(movie => {
            if (movie.title) {
              return <MovieListItem movie={movie} key={movie.id} />;
            }
            return '';
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default HomePage;
