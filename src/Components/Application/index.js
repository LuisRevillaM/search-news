import React, { Component } from "react";
import NewsContainer from "../NewsContainer";
import NewsGrid from "../NewsGrid/";
import "./App.css";

const App = props => {
  return (
    <NewsContainer className="App">
      {news => {
        return (
          <div>
            <NewsGrid news={news} />
          </div>
        );
      }}
    </NewsContainer>
  );
};

export default App;
