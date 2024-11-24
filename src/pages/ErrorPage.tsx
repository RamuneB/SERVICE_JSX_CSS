import React from 'react'; // Pridėkite React importą
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as Error; // Naudojame type assertion, kad nurodytume klaidos tipą
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message || error.toString()}</i> {/* Jei nėra statusText, rodome klaidos pranešimą */}
      </p>
    </div>
  );
};

export default ErrorPage;
