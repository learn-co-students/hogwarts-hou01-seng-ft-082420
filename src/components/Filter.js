import React from "react";

const Filter = ({ handleToggleGreased, handleSortChange }) => {
  return (
    <div className="filterWrapper">
      <div className="ui menu">
        <div className="item">
          <p>Greased pigs only?</p>
        </div>
        <div className="item">
          <input onChange={handleToggleGreased} type="checkbox" />
        </div>
        <br></br>
        <div className="item">
            Sort by:
        </div>
        <div className="item">
          <select onChange={handleSortChange} name="sort">
            <option value="name">Name</option>
            <option value="weight">Weight</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
