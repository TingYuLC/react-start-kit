import * as React from 'react';
import Poster from '@/demo/theater/Poster';
import '@/demo/theater/index.less';

const { useEffect, useState } = React;

const MOVIE_API_URL = 'https://douban-api.uieee.com/v2/movie/in_theaters?start=0&count=6';

const Theater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((data) => data.json())
      .then((data) => {
        setMovies(data.subjects);
      });
  }, []);


  return (
    <div className="demo-theater">
      <div className="theater-movies">
        {
          movies.map((movie) => (
            <Poster
              key={movie.id}
              title={movie.title}
              img={movie.images && movie.images.small}
              pubdate={movie.mainland_pubdate}
              rating={movie.rating}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Theater;
