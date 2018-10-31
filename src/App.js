import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import withTracker from './withTracker';

const MainMenu = () => {
  return (
    <div>
      <Link to="/homepage">
        <button>home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
};
ReactGA.initialize('UA-000000-01');

class App extends Component {
 
  render() {
    return (
      
      <Router>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My React App</title>
          <meta name="description" content="Main component" />
          <meta property="og:type" content="Main component" />
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="twitter:card" content="App.js Twitter card"/>
        </Helmet>
        <MainMenu />
        <h1>Hello World</h1>
        <div>
            <Route exact path="/homepage" component={withTracker(Home)} />
            <Route exact path="/about" component={withTracker(About)} />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;

