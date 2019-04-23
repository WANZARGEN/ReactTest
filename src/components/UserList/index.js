import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  List(props) {
    const items = props.data;
    const listItems = items.map((item) =>
      <TableRow key={item.index}>
        <TableCell children={item.index}></TableCell>
        <TableCell children={item.name.first + ' ' + item.name.last}></TableCell>
        <TableCell children={item.address}></TableCell>
        <TableCell children={item.age}></TableCell>
        <TableCell children={item.company}></TableCell>
        <TableCell children={item.email}></TableCell>
      </TableRow>
    );
    return (
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
        <TableBody>{listItems}</TableBody>
      </Table>
    );
  }

  render() {
    return (
      <div className="user-list">
        <this.List data={this.state.data}/>
      </div>
    );
  }
}

export default UserList;