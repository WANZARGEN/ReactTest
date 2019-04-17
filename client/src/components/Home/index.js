import React, { Component } from 'react'; //React is a open-source JS library. to develop UI (User Interface) on web application or site. Its fully component base.

const table = <table>
                <thead>
                  <th>Date</th>
                  <th>Comment</th>
                  <th>Amount</th>
                  <th>Unit</th>
                  <th>For</th>
                  <th>Payed</th>
                </thead>
                <tbody>
                </tbody>
              </table>

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
        {table}
      </div>
    );
  }
}

export default Home;