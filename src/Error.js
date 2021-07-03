import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main>
      <h2>
        Oops! Entered a dead zone. Only demons play here.{" "}
        <Link to="/" className="btn">
          Go Back to Home
        </Link>{" "}
      </h2>
    </main>
  );
}

export default Error;
