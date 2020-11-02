import React from "react";
import HogDetails from "./HogDetails";

class HogTile extends React.Component {
  state = {
    clicked: false,
  };

  getImage = (hogName) => {
    let formattedName = hogName.split(" ").join("_").toLowerCase();
    let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
    return pigPics;
  };

  handleDetailsClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    let hog = this.props.hog;
    return (
      <div className="ui card eight wide column">
        <h3 className="header">{hog.name}</h3>
        <div className="image">
          <img src={this.getImage(hog.name)} />
        </div>
        {this.state.clicked ? <HogDetails hog={hog} /> : null}

        <button className="ui button" onClick={this.handleDetailsClick}>Show Details</button>
      </div>
    );
  }
}

export default HogTile;
