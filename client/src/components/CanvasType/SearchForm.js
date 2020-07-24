import React from "react";

/// This is our html for our form that we will import in our index.js for our typing game
//It takes in our handleInputChange function so that we can filter through our data

function SearchForm(props) {
    return (
      <form className="Name">
        <div className="form-group form-style">
          <label className="word-style" htmlFor="NameSearch">{props.passWord}</label>
          <input
            value={props.name}
            onChange={props.handleInputChange}
            name="name"
            list="names"
            type="text"
            className="form-control"
            id="name"
          />
          
        </div>
      </form>
    );
  }

export default SearchForm;