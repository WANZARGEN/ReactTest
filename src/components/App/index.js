import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import TopBar from '../TopBar'
import SideBar from '../SideBar'

import Home from '../Home'
import UserList from '../UserList';

import CssBaseline from '@material-ui/core/CssBaseline';
import style from './style.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>{/** <></> 형태의 빈 태그로 대체해서 쓸 수 있음. 그러나 이걸 support해주지 않는 툴이 아직 있으니 사용에 유의할 것. */}
        <CssBaseline />
        <div  className='app'>
          <TopBar />
          <SideBar />
          <div className='content-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/list' component={UserList} />
            </Switch>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
