import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br/>
      <label>Sort/Filter Pigs: </label>
      <select onChange={props.handleFilter} className="ui selection dropdown">
        <option value='all'>All</option>
        <option value='greased'>Greased</option>
        <option value='weight'>Weight</option>
        <option value='name'>Name</option> 
      </select>
    </div>
  );
};

export default Nav;
