import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
    return query;
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleQuery(query);
    // setQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={e => handleSubmit(e)}>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={e => handleChange(e)}
        />

        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </header>
  );
}
