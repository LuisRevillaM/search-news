# Documentation

Since our component tree is not too many levels deep, it's been decided to manage the state of the application using React.Component's state and setState - instead of other patterns involving a global store, ala Redux. This state and logic are shared using typical React patterns to compose components.

## Hierarchy

The top-most component is called Application. This is a stateless component that renders `<NewsContainer/>`, which holds the state and logic to be considered "global". Other components, like `<SearchBar/>` and `<NewsGrid/>` receive the necessary data and logic through the render children pattern.

```javascript
  const Application = ()=>{
    return (
      <NewsContainer>
        {(news, gethNews, status)=>{
          return (
            <SearchBar onSearch={getNews} />
            <NewsGrid news={news} status={status} />)
         }}
      </NewsContainer>)
     }
```

## News Container

This component holds the list of news fetched from the API. It also holds the logic to make async requests to the API and update the Component's state. To share this state and logic, we use the render props.children pattern

### Render children

NewsContainer doesn't have any opinions on how the information/methods it holds should be used and rendered. Its render method just executes a function called this.props.children. This allows the pattern shown above, in which `<NewsContainer>` wraps a function as its only child. Then from within `NewsContainer`, this presentational function is executed, passing it the necessary state and methods as arguments.

```javascript
return (
  <div>
    {this.props.children(this.state.news, this.fetchNews, this.state.status)}
  </div>
);
```

### Language as props

By default, `NewsContainer` will request news from the NewsAPI in language 'en'. Optionally, however, the component accepts a language prop. This demonstrates how the component can be made more flexible and general in its implementation.

```javascript
<NewsContainer language="es">/*render function*/</NewsContainer>
```

## SearchBar

This component consists of two input elements: one for the search term and another for the sort criteria of the results. It takes as props a method called `onSearch`, to be executed when the user clicks the "Search" button.

```javascript
return <SearchBar onSearch={getNews} />;
```

## NewsGrid

`NewsGrid` is a stateless component that takes two pieces of information as props: a list of news to display and a status string to know whether the request is in process, succeeded or failed.

```javascript
return <NewsGrid news={news} status={status} />;
```

## NewsCard

`NewsCard` is a stateless component to render the information of an individual news object. It takes as props the url to an image, the title, a description text and a url to the article.
