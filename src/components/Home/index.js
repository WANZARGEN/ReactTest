import React, { Component } from 'react'; //React is a open-source JS library. to develop UI (User Interface) on web application or site. Its fully component base.

import style from './style.scss';

import data from '../../data/home.json';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  NumberList(props) {
    const items = props.data;
    console.log(items)
    const listItems = items.map((item) =>
      <li key={item.index}>
        {item.toString()}
        {/** TODO:
         *  make material ui table using item data.
        */}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  render() {
    return (
      <div className="home">
        <this.NumberList data={this.state.data} />
      </div>
    );
  }
}

export default Home;