import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>Page Not Found</h1>
      <p>
        Looks like you’ve followed a broken link or entered a URL that doesn’t
        exist on this site.
      </p>
      <Link className="home-link not-found" to="/">
        Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
