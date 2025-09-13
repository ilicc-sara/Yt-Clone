// import { Link } from "react-router-dom";

// function NotFoundPage() {
//   return (
//     <div className="not-found-page">
//       <h1>Page Not Found</h1>
//       <p>
//         Looks like you’ve followed a broken link or entered a URL that doesn’t
//         exist on this site.
//       </p>
//       <Link className="home-link not-found" to="/">
//         Home
//       </Link>
//     </div>
//   );
// }

// export default NotFoundPage;

import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-text">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <Link to="/" className="not-found-button">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
