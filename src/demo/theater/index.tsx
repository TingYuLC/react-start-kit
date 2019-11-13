import * as React from 'react';
import Header from '@/demo/theater/Header';
import Search from '@/demo/theater/Search';
import Movie from '@/demo/theater/Movie';
import '@/demo/theater/index.less';

const { useEffect, useState } = React;

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=4c3d52ed';

const Theater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((data) => data.json())
      .then((data) => {
        setMovies(data.Search);
      });
  }, []);

  const search = (value: string) => {
    fetch(`https://www.omdbapi.com/?s=${value}&apikey=4a3b711b`)
      .then((data) => data.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };

  return (
    <div className="demo-theater">
      <Header text="MOVIE SEARCH" />
      <Search search={search} />
      <div className="theater-movies">
        {
          movies.map((movie) => {
            const {
              Title, Poster, Year, imdbID,
            } = movie;
            return <Movie title={Title} img={Poster} year={Year} key={imdbID} />;
          })
        }
      </div>
    </div>
  );
};

export default Theater;
