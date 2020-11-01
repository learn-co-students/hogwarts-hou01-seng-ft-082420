import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import Filter from "./Filter.js"

class App extends Component {

  constructor() {
    super()
    let newHogs = hogs.map(hog => {return({...hog, display: false})})
    this.state = {
      //we're adding a new "display" boolean key/value pair to the hogs object
      hogs: newHogs,
      displayHogs: newHogs 
    }
  }

  displayHog = (h) => {
    // debugger
    //changes one key and value pair for one hog
    let changeHogs = this.state.displayHogs.map(hog => {
      if (hog === h) {
        return({ ...hog, display: !h.display}) //toggle true and false
      }
      return hog
    })
    this.setState({
      displayHogs: changeHogs,
      hogs: changeHogs
    })
  }

  showAllHogs = () => {
    this.setState({
      displayHogs: this.state.hogs
    })
  }

  filterHogs = () => {
    // debugger
    let greasedHogs = this.state.hogs.filter(hog => hog.greased === true)
    this.setState({
      displayHogs: greasedHogs
    })
  }

  sortByName = () => {
    // debugger
    let sortedHogs = this.state.displayHogs.sort((a, b) => a.name > b.name ? 1 : -1)
    this.setState({
      displayHogs: sortedHogs
    })
  }

  sortByWeight = () => {
    let sortedWeight = this.state.displayHogs.sort((a, b) => a.weight > b.weight ? 1 : -1)
    this.setState({
      displayHogs: sortedWeight
    })
  }

  render() {
    // console.log(this.state.displayHogs)
    return (
      <div className="App">
        <Nav />
        <Filter filterHogs = {this.filterHogs} showAllHogs = {this.showAllHogs} sortByName = {this.sortByName} sortByWeight = {this.sortByWeight}/>
        <HogList hogs = {this.state.displayHogs} displayHog = {this.displayHog}/>
      </div>
    );
  }
}

export default App;
