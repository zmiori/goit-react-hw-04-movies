import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Route,
  Switch,
  useParams,
  useRouteMatch,
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import { fetchMovieDetails } from '../../services/api';
import Separator from '../../components/Separator';
// import Cast from '../../components/Cast';
// import Reviews from '../../components/Reviews';
const Cast = lazy(() => import('../../components/Cast'));
const Reviews = lazy(() => import('../../components/Reviews'));

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <button type="button" className={s.btn} onClick={() => history.goBack()}>
        <svg className={s.arrowBack} viewBox="0 0 5 9">
          <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"></path>
        </svg>
        Go back
      </button>
      {movie && (
        <>
          <div className={s.infoWrapper}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
                className={s.poster}
              ></img>
            </div>
            <div className={s.info}>
              <h2>
                {movie.title} ({movie.release_date.substring(0, 4)})
              </h2>
              <p>User Score: {movie.vote_average * 10} %</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p className={s.genres}>
                {movie.genres.map(genre => (
                  <span key={genre.name} className={s.genre}>
                    {genre.name}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <Separator />

          <div className={s.additionalInfo}>
            <h4>Additional Information</h4>
            <ul>
              <li>
                <Link to={`${url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${url}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>

          <Separator />

          <Suspense fallback={<h1>LOADING...</h1>}>
            <Switch>
              <Route path={`${path}/cast`}>
                <Cast />
              </Route>

              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}
