import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';

class HomeComponent extends Component {

    onclickhandler()
    {
       console.log("Clicked")
       ReactGA.event({
        category: 'User',
        action: 'Button clicked'
      });
    }
    
    render() {
        return (
            <div>
                <Helmet>
                <meta name="twitter:card" content="Home Component Twitter card"/>
                </Helmet>
                <h1>This is HomeComponent Page</h1>
                <button onClick={this.onclickhandler}>Click here! and tract Ga Event</button>
            </div>
        );
    }
}

export default HomeComponent;