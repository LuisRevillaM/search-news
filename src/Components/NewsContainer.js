import React, { Component } from "react";

class NewsContainer extends Component {
  state = {
    news: [],
    status: "",
    sortBy: "date"
  };
  componentDidMount() {
    this.controller = new AbortController();
    this.signal = this.controller.signal;
    this.fetchNews = this.searchNews();
    this.setState({ status: "ready" });
  }
  componentWillUnmount() {
    this.controller.abort();
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
  fetchNews;
  searchNews = function() {
    let dispatch = this.dispatch(this.stateReducer, this.state);
    let signal = this.signal;

    return async function(searchTerm, sort) {
      if (searchTerm.length > 0) {
        console.log(sort);
        const myParams = {
          language: "en",
          q: searchTerm,
          sortBy: sort ? sort : "",
          apiKey: "7fa0c8e603034cadbb9f36b4f8c21c87"
        };
        const url = new URL("https://newsapi.org/v2/everything");
        url.search = new URLSearchParams(myParams);
        dispatch({ type: "FETCH_NEWS" });
        let data = await fetch(url, { signal });
        let jsonData = await data.json();
        dispatch({ type: "NEWS_ARRIVED", payload: jsonData.articles });
      }
    };
  };
  render() {
    return <div>{this.props.children(this.state.news, this.fetchNews)}</div>;
  }
}

export default NewsContainer;
