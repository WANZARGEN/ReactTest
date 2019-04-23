import React, { Component } from 'react'; //React is a open-source JS library. to develop UI (User Interface) on web application or site. Its fully component base.
// import { Router, Route } from 'react-router-dom';

import UserList from '../UserList';
import data from '../../data/home.json';

import style from './style.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div className="home">
        <UserList data={this.state.data}/>
      </div>
    );
  }
}

export default Home;