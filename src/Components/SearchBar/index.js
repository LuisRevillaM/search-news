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
  buttonClickHandler = () => {
    this.props.onNewTerm(this.state.inputValue, this.state.sortBy);
  };
  sortArticles = by => {
    return () => {
      this.setState({ sortBy: by }, () => {
        this.props.onNewTerm(this.state.inputValue, this.state.sortBy);
      });
    };
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
        <Dropdown
          sortArticles={this.sortArticles}
          sortBy={this.state.sortBy}
          criterias={["publishedAt", "relevancy", "popularity", "none"]}
        />

        <button className="search-bar__btn" onClick={this.buttonClickHandler}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
