import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);

  const errorMessage = err ? `${err.status} : ${err.statusText}` : 'Unknown Error';

  return (
    <div className="container">
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>{errorMessage}</h2>
    </div>
  );
};

export default Error;
