import React, { Component } from "react";
import HogCard from "./HogCard";

class HogList extends Component {
  render() {
    return (
      <div>
       {this.props.hogs.map(hog => <HogCard hog={hog} displayHog = {this.props.displayHog}/>)}
      </div>
    );
  }
}

export default HogList;
