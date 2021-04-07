import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const isReviews = reviews.length > 0;

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul className={s.reviews}>
      {isReviews &&
        reviews.map(review => (
          <li key={review.id}>
            <h4> Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      {!isReviews && <p>No reviews available.</p>}
    </ul>
  );
}
