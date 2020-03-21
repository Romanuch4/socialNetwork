import React, { Component } from 'react';
import * as axios from 'axios';
import LeftAsideFriendsItem from './hellow-content-left_aside-friends-item';
import Preloader from '../../../../../../common/preloader';

export default class LeftAsideFriendsItemComponent extends Component {
  componentDidMount = () => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users?count=10&page=1")
      .then(response => {
        this.props.getStartFriends(response.data.items);
      });
  };

  addFriends = () => {
    this.props.toogleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${this.props.count}`).then(response => {
      this.props.toogleIsFetching(false);
      this.props.getFriends(response.data.items);
    });
    this.props.changeCount();
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <LeftAsideFriendsItem stateFriends={this.props.stateFriends} addFriends={this.addFriends} />
      </>
    );
  };
};