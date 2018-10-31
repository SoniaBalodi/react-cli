import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';

ReactGA.initialize('UA-000000-01');

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My React App</title>
          <base target="_blank" href="http://localhost:3000/" />
          <meta name="description" content="Main component" />
          <meta property="og:type" content="Main component" />
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="twitter:card" content="App.js Twitter card"/>
        </Helmet>
        <MainMenu />
        <h1>Hello World</h1>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;

