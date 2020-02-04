import React from "react";
import Dropdown from "./../Dropdown"

export default function Input(props) {
  return(
    <div className="input-group mb-3 mt-3">
      <input type="text" className="form-control" placeholder="Enter a movie title.." {...props} ></input>
      <div className="input-group-append">
        <Dropdown />
        <button className="btn btn-outline-secondary" type="button" id="Submit" onClick={props.onSubmit}>Search</button>
      </div>
    </div>
  )
}