import { Link } from 'react-router-dom';
// import s from './MovieListItem.module.css';

export default function MovieListItem(props) {
  const { movie } = props;

  return (
    <li key={movie.id}>
      <Link to={`movies/${movie.id}`}>{movie.title}</Link>
    </li>
  );
}
