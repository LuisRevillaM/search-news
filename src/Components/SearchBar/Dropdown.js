import React, { Component } from "react";
import down from "../../assets/down.png";

class Dropdown extends Component {
  state = {
    isOpen: false
  };
  criterias = ["publishedAt", "relevancy", "popularity", "none"];

  sortCriteria = {
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

  renderOptions = this.criterias.map(criteria => {
    return (
      <div
        className="search-bar__sort-btn"
        key={criteria}
        onClick={this.props.sortArticles(criteria)}
      >
        {criteria === "none" ? "None" : this.sortCriteria[criteria]}
      </div>
    );
  });

  render() {
    return (
      <div className="search-bar__sort" onClick={this.toggleDropdown}>
        <div>
          {this.sortCriteria[this.props.sortBy]}
          <img src={down} alt="down arrow" className="sort-arrow" />
        </div>
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
