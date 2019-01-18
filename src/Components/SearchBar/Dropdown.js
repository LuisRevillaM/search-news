import React, { Component } from "react";

class Dropdown extends Component {
  state = {
    isOpen: false
  };

  sortingCriteria = {
    publishedAt: "Date",
    popularity: "Popularity",
    relevancy: "Relevance",
    none: "Sort Articles"
  };

  toggleDropdown = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  renderOptions = this.props.criterias.map(criteria => {
    return (
      <div
        className="search-bar__sort-btn"
        key={criteria}
        onClick={this.props.sortArticles(criteria)}
      >
        {criteria === "none" ? "None" : this.sortingCriteria[criteria]}
      </div>
    );
  });

  render() {
    return (
      <div className="search-bar__sort" onClick={this.toggleDropdown}>
        <div>{this.sortingCriteria[this.props.sortBy]}</div>
        <div
          className="search-bar__sort-dropdown"
          style={{ display: this.state.isOpen ? "block" : "none" }}
        >
          {this.renderOptions}
        </div>
      </div>
    );
  }
}

export default Dropdown;
