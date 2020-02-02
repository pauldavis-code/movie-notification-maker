import React from "react";

//styling
import "./../../styles/display.css"

export  default function Display(props) {
  return(
    <div>
      <div id="title">{props.title}</div>
      <hr></hr>
      <div id="message">{props.message}</div>
      <br></br>
      <div id="plot">{props.plot}</div>
    </div>
  )
}