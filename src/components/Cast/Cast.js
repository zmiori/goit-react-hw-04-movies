import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import s from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={s.castList}>
      {cast &&
        cast.map(actor => (
          <li key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
              alt={actor.name}
              className={s.photo}
            ></img>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
    </ul>
  );
}
