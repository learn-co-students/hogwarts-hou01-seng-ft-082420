import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">

      <label>Greased?</label>
      <select onChange={props.filterGreasedPigs}>
        <option >I don't care 😤</option>
        <option>Grease me up boyo</option>
        <option>No...that's gross</option>
      </select>
      
      <label>Sort by Name</label>
      <input type='textfield' onChange={props.sortByName}></input>

      <select onChange={props.sortByWeight}>
        <option >Fattest to Dantiest</option>
        <option>Dantiest to Fattest</option>
      </select>

      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
