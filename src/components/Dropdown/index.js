import React from "react";

export default function Dropdown(props) {
  return(
    <div className="dropdown">
      <a className="btn btn-outline-primary dropdown-toggle" href="1" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Movie Time
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="1">Action</a>
        <a className="dropdown-item" href="2">Another action</a>
        <a className="dropdown-item" href="3">Something else here</a>
      </div>
    </div>
  );
};