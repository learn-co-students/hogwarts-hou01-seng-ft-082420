import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {

  constructor(){
    super();
    this.state = ({
      hogs: hogs
    })
  }


  filterGreasedPigs = (choice) => {
    let category = choice.target.value 
    if (category === 'Grease me up boyo'){
      this.setState({hogs:hogs.filter(hog => hog.greased)})
    }
    else if (category === "No...that's gross"){
      this.setState({hogs:hogs.filter(hog => !hog.greased)})
    }
    else{
      this.setState({hogs:hogs})
    }
  }

  sortByName = (str) => {
    let typedName = str.target.value.toUpperCase();

    this.setState({
      hogs: this.state.hogs.sort(function(a,b){
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA.includes(typedName) && !nameB.includes(typedName)){
        return -1;
      }
      if (!nameA.includes(typedName) && nameB.includes(typedName)){
        return 1;
      }
      return 0;
      })
    })
  }

  sortByWeight = (choice) => {
    let category = choice.target.value 
    if (category === 'Fattest to Dantiest'){
      this.setState({
        hogs: this.state.hogs.sort(function(a,b){
        let weightA = a.weight
        let weightB = b.weight
        if (weightA < weightB){
          return 1;
        }
        if (weightA > weightB){
          return -1;
        }
        return 0;
        })
      })
    }
    else if (category ==="Dantiest to Fattest"){
      this.setState({
        hogs: this.state.hogs.sort(function(a,b){
        let weightA = a.weight
        let weightB = b.weight
        if (weightA < weightB){
          return -1;
        }
        if (weightA > weightB){
          return 1;
        }
        return 0;
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav 
        filterGreasedPigs={this.filterGreasedPigs}
        sortByName={this.sortByName}
        sortByWeight={this.sortByWeight}/>

        <HogContainer hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
