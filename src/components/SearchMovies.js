import React, { useState } from 'react';
import '../css/SearchMovies.css';
import MovieCard from './MovieCard';

export default function SearchMovies() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url);
      const data  = await res.json();
      setMovies(data.results)
    } catch(err) {
        console.error(err);
    }
  }

  const CardList = ({movies}) => {
    return (
      <>
        
      </>
    )
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Search Movies by Title
        </label>
        <input 
          className="input" 
          type="text" 
          name="query" 
          placeholder="e.g. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete='off'
          />
        <button className="button" type="submit">Search</button>
      </form>
      <div className='card-list'>
          {movies.filter(movie => movie.poster_path).map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </>
  )
}