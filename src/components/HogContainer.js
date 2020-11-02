import React, { Component } from "react";
import HogCard from './HogCard'
class HogContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is my HogContainer</h1>
        <h2>I will iterate through my array and for every element I want a hogCard</h2>
        {this.props.hogs.map(hog => <HogCard hog={hog}/>)}
      </div>
    );
  }
}

export default HogContainer;
