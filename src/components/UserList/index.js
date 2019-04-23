import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import style from './style.scss';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      user: {
          _id: undefined,
          name: {first: undefined, last: undefined}
      }
    };
  }

  handleClick(item, e) {
    e.preventDefault()
    console.log(item)
    const { user } = this.state.user;

    // store.dispatch({ type: 'SIGN_IN' })
  }

  render() {
    return (
      <div className="user-list">
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>#</TableCell>
                <TableCell>name</TableCell>
                <TableCell>address</TableCell>
                <TableCell>age</TableCell>
                <TableCell>company</TableCell>
                <TableCell>email</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {this.state.data.map((user) => {
                    return (
                        <TableRow key={user.index} hover={true} className="user" onClick={this.handleClick.bind(this, user)}>
                            <TableCell children={user.index}></TableCell>
                            <TableCell children={user.name.first + ' ' + user.name.last}></TableCell>
                            <TableCell children={user.address}></TableCell>
                            <TableCell children={user.age}></TableCell>
                            <TableCell children={user.company}></TableCell>
                            <TableCell children={user.email}></TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
      </Table>
      </div>
    );
  }
}

export default UserList;