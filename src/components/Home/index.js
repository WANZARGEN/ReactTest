import React, { Component } from 'react'; //React is a open-source JS library. to develop UI (User Interface) on web application or site. Its fully component base.

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  render() {
    return (
      <div className="Home">
        Home 내용 ----
      </div>
    );
  }
}

export default Home;