import React, { Component } from "react";
import HogTile from "./HogTile";

class HogContainer extends Component {

renderHogTiles = () => {
  let hogList = this.props.hogs
  return hogList.map(hog => <HogTile hog={hog} />)
}

componentDidMount() {
  this.renderHogTiles()
}

render(){
    return (
      <div className="ui grid container">
        {this.renderHogTiles()}
      </div>
    );
  }
}

export default HogContainer;
