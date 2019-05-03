import React, { Component } from 'react'; //React is a open-source JS library. to develop UI (User Interface) on web application or site. Its fully component base.
import { Link } from "react-router-dom";

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <h2>Home</h2>
        <ul>
          <li>
            <Link to={{ pathname: "/list" }}>
              Go User List
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/" }}>
              Go Home
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;