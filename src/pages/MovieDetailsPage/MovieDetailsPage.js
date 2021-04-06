import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import { fetchMovieDetails } from '../../services/api';
import Separator from '../../components/Separator';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <button type="button">
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
                  <span className={s.genre}>{genre.name}</span>
                ))}
              </p>
            </div>
          </div>

          <Separator />

          <div className={s.additionalInfo}>
            <h4>Additional Information</h4>
          </div>
        </>
      )}
    </>
  );
}
