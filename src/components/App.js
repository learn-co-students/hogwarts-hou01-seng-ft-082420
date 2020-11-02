import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogBox from "./HogBox"
import Filter from './Filter'

class App extends Component {
  state ={
    greased: false,
    // sortedHogs: [],
    sortBy: "none"
  }

  componentDidMount = () => {
   this.sortHogs()
  }

  handleToggleGreased = () => {
    this.setState({greased: !this.state.greased})
  }

  filterGreased = () => {
    if (this.state.greased){
      return hogs.filter(hog=> hog.greased)
    } else {
      return hogs
    }
  }

  handleSortChange = (e) => {
    console.log(e.target.value)
    this.setState({sortBy: e.target.value})
  }

  sortHogs = () => {
    let currentHogs = this.filterGreased()
    if (this.state.sortBy == 'weight'){
        return currentHogs.sort((a, b) =>{
          return a.weight - b.weight
        })
      } else if (this.state.sortBy == 'name') {
        return currentHogs.sort((a,b) => {
          return a.name.localeCompare(b.name)
        })
      }
      else {
        return currentHogs
      }
  }
  
  render() {
    return (
      <div className="ui grid container">
        <Nav />
        <Filter
        handleSortChange={this.handleSortChange}
          handleToggleGreased={this.handleToggleGreased}
        />
        <HogBox
          hogs={this.sortHogs()}
        />
      </div>
    );
  }
}

export default App;
