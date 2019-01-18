import React, { Component } from "react";
import NewsContainer from "../NewsContainer";
import NewsGrid from "../NewsGrid/";
import SearchBar from "../SearchBar/";

import "./App.css";

//
const App = () => {
  return (
    <NewsContainer className="App">
      {(news, getNews) => {
        return (
          <div>
            <SearchBar onNewTerm={getNews} />

            <NewsGrid news={news} />
          </div>
        );
      }}
    </NewsContainer>
  );
};

export default App;
