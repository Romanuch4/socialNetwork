import React, { Component } from 'react';
import * as axios from 'axios';
import LeftAsideFriendsItem from './hellow-content-left_aside-friends-item';

export default class LeftAsideFriendsItemComponent extends Component {
  addFriends = () => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users?count=4").then(response => {
      this.props.getFriends(response.data.items);
    });
  };

  render() {
    return (
      <LeftAsideFriendsItem stateFriends={this.props.stateFriends} addFriends={this.addFriends} />
    );
  };
};