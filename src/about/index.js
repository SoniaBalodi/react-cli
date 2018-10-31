import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <Helmet>
                <meta name="twitter:card" content="About Component Twitter card"/>
                </Helmet>
                <h1>This is About Page</h1>
            </div>
        );
    }
}

export default HomeComponent;