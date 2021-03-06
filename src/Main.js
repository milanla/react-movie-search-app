import React from 'react';
import './css/Main.css';
import SearchMovies from './components/SearchMovies';

const Main = () => {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies/>
    </div>
  );
}

export default Main;
