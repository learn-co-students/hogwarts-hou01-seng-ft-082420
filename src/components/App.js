import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogData from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogData,
      filter: false
    }
  }

  filterGreased = () => {
    if (this.state.filter === false) {
      let newArray = this.state.hogs.filter(hog => hog.greased === true)
      this.setState({
        hogs: newArray,
        filter: true
      })
    } else {
      this.setState({
        hogs: hogData,
        filter: false
      })
    }
  }

  sortName = () => {
    let newArray = this.state.hogs
    newArray.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      hogs: newArray
    })
  }

  sortWeight = () => {
    let newArray = this.state.hogs
    newArray.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    this.setState({
      hogs: newArray
    })
  }

  render() {
    return (
      <div className="App">
        <Nav 
        filterGreased={this.filterGreased}
        sortName={this.sortName}
        sortWeight={this.sortWeight}
        />
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
