import React, { Component } from "react";
import "./SearchBar.css";
import Dropdown from "./Dropdown";

class SearchBar extends Component {
  state = {
    inputValue: "",
    sortBy: "none"
  };
  textInputHandler = ev => {
    let inputValue = ev.target.value;
    this.setState({ inputValue });
  };
  handleEnter = ev => {
    if (ev.key === "Enter") {
      this.props.onSearch(this.state.inputValue, this.state.sortBy);
    }
  };
  buttonClickHandler = () => {
    this.props.onSearch(this.state.inputValue, this.state.sortBy);
  };
  sortArticles = by => {
    return () => {
      this.setState({ sortBy: by }, () => {
        this.props.onSearch(this.state.inputValue, this.state.sortBy);
      });
    };
  };
  render() {
    let { inputValue } = this.state;
    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          placeholder="Search news"
          value={inputValue}
          onChange={this.textInputHandler}
          onKeyPress={this.handleEnter}
        />
        <Dropdown sortArticles={this.sortArticles} sortBy={this.state.sortBy} />
        <button className="search-bar__btn" onClick={this.buttonClickHandler}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
