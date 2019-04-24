import React, { Component } from 'react'; 
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';

import style from './style.scss';

class TopBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top-bar">
        <Grid container alignContent='center' alignItems='center'>
          <Grid item xs>
            <Link className="link" to={{ pathname: "/" }}>Go Home</Link>
          </Grid>
          <Grid item xs>TopBar!</Grid>
        </Grid>
      </div>
    );
  }
}

export default TopBar;