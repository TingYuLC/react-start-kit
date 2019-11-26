import * as React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  return (
    <p>{id}</p>
  );
};

export default MovieDetail;
