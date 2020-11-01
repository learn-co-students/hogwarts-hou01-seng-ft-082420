import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <button onClick = {this.props.filterHogs}>Filter Greased</button>
        <button onClick = {this.props.showAllHogs}>Show All</button>
        <button onClick ={this.props.sortByName}>Sort By Name</button>
        <button onClick ={this.props.sortByWeight}>Sort By Weight</button>
      </div>
    );
  }
}

export default Filter;