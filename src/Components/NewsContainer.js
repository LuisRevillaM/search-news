import React, { Component } from "react";
import SearchBar from "./SearchBar/";

class NewsContainer extends Component {
  state = {
    news: [],
    status: "ready"
  };
  componentDidMount() {
    this.controller = new AbortController();
    this.signal = this.controller.signal;
  }
  stateReducer = (state, action) => {
    if (action.type === "FETCH_NEWS") {
      return { ...state, ...{ status: "fetching" } };
    }
    if (action.type === "NEWS_ARRIVED") {
      return {
        ...state,
        ...{
          status: "success",
          news: action.payload
        }
      };
    }
    if (action.type === "FETCHING_ERROR") {
      return { ...state, ...{ status: "error" } };
    }
  };

  dispatch = (reducer, state) => {
    return action => {
      const newState = reducer(state, action);
      this.setState(newState);
    };
  };

  controller;
  signal;
  searchNews = function() {
    let dispatch = this.dispatch(this.stateReducer, this.state);
    let signal = this.signal;

    return async function(searchTerm) {
      console.log(searchTerm);
      const headers = new Headers();
      headers.append("X-API-Key", "7fa0c8e603034cadbb9f36b4f8c21c87");
      const myParams = { country: "us", q: searchTerm };
      const url = new URL("https://newsapi.org/v2/top-headlines");
      url.search = new URLSearchParams(myParams);
      dispatch({ type: "FETCH_NEWS" });
      let data = await fetch(url, { headers, signal });
      let jsonData = await data.json();
      dispatch({ type: "NEWS_ARRIVED", payload: jsonData.articles });
      console.log(jsonData.articles);
    };
  };
  render() {
    let onNewTerm = this.searchNews();
    return (
      <div>
        <SearchBar onNewTerm={onNewTerm} />

        {this.props.children(this.state.news)}
      </div>
    );
  }
}

export default NewsContainer;
