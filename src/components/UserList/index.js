import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment } from '../../actions';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import style from './style.scss';

import data from '../../data/home.json';

class UserList extends Component {

  constructor(props) {
    super(props);
  }

  handleClick(item, e) {
    e.preventDefault()
    this.props.onIncrement(item.index);
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
                <TableCell>count</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {data.map((user) => {
                    return (
                        <TableRow key={user.index} hover={true} className="user" onClick={this.handleClick.bind(this, user)}>
                            <TableCell children={user.index}></TableCell>
                            <TableCell children={user.name.first + ' ' + user.name.last}></TableCell>
                            <TableCell children={user.address}></TableCell>
                            <TableCell children={user.age}></TableCell>
                            <TableCell children={user.company}></TableCell>
                            <TableCell children={user.email}></TableCell>
                            <TableCell children={this.props.counter[user.index]}></TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
      </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (idx) => dispatch(increment(idx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);