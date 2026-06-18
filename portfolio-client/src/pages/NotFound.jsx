import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section not-found">
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="btn primary" to="/">Go Home</Link>
    </section>
  );
}

export default NotFound;
