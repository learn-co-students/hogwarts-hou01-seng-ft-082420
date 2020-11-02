import React, { Component } from "react";
import Hog from './Hog'

const HogContainer = (props) => {

  return (
    <div className = "ui grid container">
          {props.hogs.map(hog => {
            return(
              <Hog hog={hog}/>
            )
          })}
    </div>
  );
}

export default HogContainer;
