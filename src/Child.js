import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <Helmet>
                <meta name="twitter:site" content="https://www.my-site.com/my-special-page"/>
                </Helmet>
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default ChildComponent;