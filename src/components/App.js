import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from './Filter'

class App extends Component {
  state= {
    hogs: hogs,
    greasedHogs: hogs.filter(hog=> hog.greased),
    selectedHogs: [],
    selected: "ghreased"
  }


  handleReset = () => {
    this.setState({
      selectedHogs: []
    })
  }
  handleGreasyBois = () => {
    console.log('greasy bois only')
    //when I clicked, I only want to display the greasiest of hogs
    this.setState({
      selectedHogs: this.state.hogs.filter(hog=> hog.greased)
    })
  }

  sortByName = () => {
    //sort by name
    // testarr.sort((name, name2) => name > name2 ? 1 : -1)
    this.setState({
      selectedHogs: this.state.hogs.sort((hog1, hog2)=> hog1.name > hog2.name ? 1 : -1 )
    })
  }

  sortByWeight = () => {
    this.setState({
      selectedHogs: this.state.hogs.sort((hog1, hog2)=> hog1.weight > hog2.weight ? -1 : 1 )
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter greasy = {this.handleGreasyBois} reset = {this.handleReset} sortByName={this.sortByName} sortByWeight={this.sortByWeight} />
        <HogContainer hogs={this.state.selectedHogs.length > 0 ? this.state.selectedHogs : this.state.hogs}/>
      </div>
    );
  }
}

export default App;
