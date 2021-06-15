import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Google Book Search</h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.googleapis.com/books/v1/volumes"
      ></a>
    </div>
  );
}

export default Jumbotron;
