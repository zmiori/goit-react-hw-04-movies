import { Fragment, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import MovieListItem from '../../components/MovieListItem';
import s from './MoviesPage.module.css';
import { fetchMovieSearchByName } from '../../services/api';

const MoviesPage = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const lastSearch = new URLSearchParams(location.search).get('query') ?? '';
  // console.log(lastSearch);

  useEffect(() => {
    if (lastSearch) {
      setQuery(lastSearch);
      loadMovies(lastSearch);
    }
  }, [lastSearch]);

  function loadMovies(data) {
    setQuery(data);
    fetchMovieSearchByName(data)
      .then(response => setMovies([...response]))
      .catch(error => console.log(error));
    history.push({
      ...location,
      search: `query=${data}`,
    });
  }

  return (
    <Fragment>
      <SearchBar handleQuery={data => loadMovies(data)} />
      {query && (
        <Fragment>
          <ul className={s.list}>
            {movies.map(movie => (
              <MovieListItem movie={movie} key={movie.id} />
            ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MoviesPage;
