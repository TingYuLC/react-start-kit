import * as React from 'react';

interface MovieProps {
  title: string;
  img: string;
  year: string;
}

const Movie = (props: MovieProps) => {
  const { title, img, year } = props;

  return (
    <div className="theater-movie">
      <h2>{title}</h2>
      <div>
        <img src={img} alt={title} />
      </div>
      <p>{year}</p>
    </div>
  );
};

export default Movie;
