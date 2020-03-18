import React, { Component } from 'react';
import * as axios from 'axios';
import LeftAsideFriendsItem from './hellow-content-left_aside-friends-item';
import Preloader from '../../../../../../common/preloader';

export default class LeftAsideFriendsItemComponent extends Component {
  addFriends = () => {
    this.props.toogleIsFetching(true);
    axios.get("https://social-network.samuraijs.com/api/1.0/users?count=4").then(response => {
      this.props.toogleIsFetching(false);
      this.props.getFriends(response.data.items);
    });
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