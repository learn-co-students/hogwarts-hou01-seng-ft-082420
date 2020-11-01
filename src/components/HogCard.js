import React, { Component } from "react";
import HogInfo from "./HogInfo";

class HogCard extends Component {
  render() {
      //from vidhi
      const imgSrc = this.props.hog.name.toLowerCase().replace(/\s+/g, "_")
    return (
      <div onClick={() => this.props.displayHog(this.props.hog)}>
        <h3>{this.props.hog.name}</h3>
        <img src={require(`../hog-imgs/${imgSrc}.jpg`)} />
        {this.props.hog.display ? <HogInfo {...this.props.hog}/> : null}
        
        {/* //same thing */}
        {/* <HogInfo hog={this.props.hog}/> */}
      </div>
    );
  }
}

export default HogCard;