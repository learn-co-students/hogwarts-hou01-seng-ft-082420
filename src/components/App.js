import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigDisplay from "./PigDisplay";

class App extends Component {
  constructor(){
    super()
    this.state ={
      hogs: hogs,
      filter: 'all',
      hiddenArr: []
    }
  }

   hideThatPig = (hog) => {
     console.log("Hide this pig! No time to explain!", hog)
        this.setState({
            hiddenArr: [...this.state.hiddenArr, hog]
        })
    }

  handleFilter = (e) =>{
    console.log('imagine me filtering!', e.target.value)
    let filter = e.target.value
    this.setState({filter})
    if(filter === 'all'){
      this.setState({
        hogs: hogs 
      })
    } else if(filter === 'greased'){
      this.setState({
        hogs: hogs.filter(hog => hog.greased === true) 
      })
    } else if(filter === 'weight'){
      this.setState({
        hogs: [...hogs].sort((a,b) => b.weight - a.weight) 
      })
    } else{
      this.setState({
        hogs: [...hogs].sort((a,b)=> {
          if(a.name < b.name){return -1}
          if(a.name > b.name){return 1}
          return 0
        })
      })
    }
  }




  render() {
    return (
      <div className="App">
        <Nav handleFilter ={this.handleFilter}/>
        <PigDisplay hogs = {this.state.hogs} hideThatPig = {this.hideThatPig} hiddenHogs = {this.state.hiddenArr} />
      </div>
    );
  }
}

export default App;
