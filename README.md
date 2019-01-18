# Search News

This repository implements a website that fetches news from the [News API](https://newsapi.org/) and displays them to the user. You can try a deployed version [here](https://modest-babbage-f6eb2c.netlify.com/).

## Prerequisites

Node is required to run this project in your system.

## Run locally

Clone the repository. From its root directory, run

```sh
npm install
```

Then you can start the development server with

```sh
npm start
```

## Documentation

This website consist of a root, HTML document and JavaScript (React) code to generate the view layer. It's been bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React.Component's state and setState are leveraged to handle the state of the application. A parent component holds the global state as well as the logic to update it. Such state and logic are shared with a presentational component through the render children pattern. See the [docs](https://github.com/luisrevillam/search-news/tree/component-state/docs) section for implementation details.

```javascript
(<NewsContainer>
  {(news, getNews, status)=>{
    return (
      <SearchBar onSearch={getNews} />
      <NewsGrid news={news} status={status} />)
  }}
</NewsContainer>)
```
