import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    inputValue: ""
  };
  textInputHandler = ev => {
    let inputValue = ev.target.value;
    this.setState({ inputValue });
  };
  buttonClickHandler = () => {
    this.props.onNewTerm(this.state.inputValue);
  };
  render() {
    let { inputValue } = this.state;
    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          value={inputValue}
          onChange={this.textInputHandler}
        />
        <div className="search-bar__sort">Sort Articles</div>

        <button className="search-bar__btn" onClick={this.buttonClickHandler}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
