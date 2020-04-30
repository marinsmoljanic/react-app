import React from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="page-content page-not-found">
        <br></br>
        <br></br>

        <h2> Page Not Found</h2>
        <br></br>

        <p>
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;
