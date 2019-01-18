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
  buildHeader = () => {
    const apiKeyHeader = { "X-Api-Key": "7fa0c8e603034cadbb9f36b4f8c21c87" };
    const headers = new Headers(apiKeyHeader);
    return headers;
  };
  buildUrl = (searchTerm, sortCriteria) => {
    const myParams = {
      language: this.props.language || "en",
      q: searchTerm,
      sortBy: sortCriteria || ""
    };

    const url = new URL("https://newsapi.org/v2/everything");
    url.search = new URLSearchParams(myParams);
    return url;
  };
  searchNews = function() {
    const dispatch = this.dispatch(this.stateReducer, this.state);
    const signal = this.signal;
    const buildUrl = this.buildUrl;
    const headers = this.buildHeader();

    return async function(searchTerm, sortCriteria) {
      if (searchTerm.length > 0) {
        const url = buildUrl(searchTerm, sortCriteria);
        dispatch({ type: "FETCH_NEWS" });
        let data = await fetch(url, { signal, headers });
        let jsonData = await data.json();
        dispatch({ type: "NEWS_ARRIVED", payload: jsonData.articles });
      }
    };
  };

  render() {
    return (
      <div>
        {this.props.children(
          this.state.news,
          this.fetchNews,
          this.state.status
        )}
      </div>
    );
  }
}

export default NewsContainer;
