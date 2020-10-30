import React, { Component } from "react";
import HogCard from './HogCard'

const PigDisplay = (props) => {
  
    return (
      <div className='ui grid container '>
        {props.hogs.map(hog => {
          return <HogCard hog ={hog} hideThatPig ={props.hideThatPig} hiddenHogs = {props.hiddenHogs}/>
        })}
      </div>
    );
  
}

export default PigDisplay;
