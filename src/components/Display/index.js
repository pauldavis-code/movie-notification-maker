import React from "react";

export  default function Display(props) {
  return(
    <div>
      <div id="title">{props.title}</div>
      <div id="message">{props.message}</div>
      <div id="plot">{props.plot}</div>
    </div>
  )
}