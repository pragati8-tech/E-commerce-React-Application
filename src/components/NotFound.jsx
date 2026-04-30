// NotFound.jsx - 404 page for unknown routes

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <p>The URL you entered may be incorrect or the page may have been removed.</p>
      <a href="/">Go Back to Home</a>
    </div>
  );
}

export default NotFound;