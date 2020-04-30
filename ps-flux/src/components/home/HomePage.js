import React from "react";
import { Link } from "react-router-dom";

// function component primjer
function HomePage() {
  return (
    <div className="jumbotron page-content">
      <h1>Plural Administration</h1>
      <p>Primjer teksta</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
